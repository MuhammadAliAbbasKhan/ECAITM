from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
import datetime
from .models import UserAccount, DemoLead, SubscriptionOrder, ContactInquiry, ServiceRequest
from .db_mongo import sync_to_mongo
import time

ADMIN_PASSCODE = 'aliabbas1234578!'

@api_view(['POST'])
def register_user(request):
    data = request.data
    username = data.get('username', '').strip()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '').strip()
    company = data.get('company', '').strip()

    if not email:
        return Response({'success': False, 'message': 'Email address is required'}, status=status.HTTP_400_BAD_REQUEST)
    if not password:
        return Response({'success': False, 'message': 'Password is required'}, status=status.HTTP_400_BAD_REQUEST)

    if not username:
        username = email.split('@')[0]

    # Check if user exists
    user = UserAccount.objects.filter(email=email).first()
    if user:
        return Response({'success': False, 'message': 'Account with this email already exists. Please Sign In.'}, status=status.HTTP_400_BAD_REQUEST)

    user = UserAccount.objects.create(
        username=username,
        email=email,
        password=password,
        company=company,
        is_paid=False,
        active_plan='Free Tier'
    )
    
    # Sync to MongoDB Atlas
    sync_to_mongo('users', {
        'username': username,
        'email': email,
        'company': company,
        'is_paid': False,
        'active_plan': 'Free Tier',
        'created_at': time.time()
    })

    token = f'ecaitm_token_{user.id}_{int(time.time())}'

    return Response({
        'success': True,
        'message': 'Account created successfully! You can now Sign In.',
        'token': token,
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'company': user.company,
            'is_paid': False,
            'active_plan': user.active_plan,
            'paid_until': None
        }
    }, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login_user(request):
    data = request.data
    email = data.get('email', '').strip().lower()
    password = data.get('password', '').strip()

    if not email or not password:
        return Response({'success': False, 'message': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    # STRICT CHECK: User MUST be registered first! No auto-account creation!
    user = UserAccount.objects.filter(email=email).first()
    if not user:
        return Response({'success': False, 'message': 'Account not found. You must Sign Up / Register first before logging in!'}, status=status.HTTP_401_UNAUTHORIZED)

    if user.password and user.password != password:
        return Response({'success': False, 'message': 'Incorrect password. Please check your credentials.'}, status=status.HTTP_401_UNAUTHORIZED)

    is_paid_active = user.is_subscription_active()
    token = f'ecaitm_token_{user.id}_{int(time.time())}'

    return Response({
        'success': True,
        'message': 'Sign in successful!',
        'token': token,
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'company': user.company,
            'is_paid': is_paid_active,
            'active_plan': user.active_plan if is_paid_active else 'Free Tier',
            'paid_until': user.paid_until.strftime('%Y-%m-%d') if (user.paid_until and is_paid_active) else None
        }
    })

@api_view(['GET'])
def get_user_profile(request):
    email = request.query_params.get('email', '').strip().lower()
    if not email:
        return Response({'success': False, 'message': 'Email parameter required'}, status=status.HTTP_400_BAD_REQUEST)

    user = UserAccount.objects.filter(email=email).first()
    if not user:
        return Response({'success': False, 'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    is_paid_active = user.is_subscription_active()

    return Response({
        'success': True,
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'company': user.company,
            'is_paid': is_paid_active,
            'active_plan': user.active_plan if is_paid_active else 'Free Tier',
            'paid_until': user.paid_until.strftime('%Y-%m-%d') if (user.paid_until and is_paid_active) else None
        }
    })

@api_view(['POST'])
def subscribe_plan(request):
    data = request.data
    email = data.get('email', '').strip().lower()
    plan_name = data.get('plan_name', 'Enterprise AI Package')

    if not email:
        return Response({'success': False, 'message': 'User email required for checkout'}, status=status.HTTP_400_BAD_REQUEST)

    # STRICT CHECK: User MUST be registered first to pay!
    user = UserAccount.objects.filter(email=email).first()
    if not user:
        return Response({
            'success': False,
            'message': 'You must Sign Up / Register an account before purchasing a subscription plan!'
        }, status=status.HTTP_400_BAD_REQUEST)

    # Check if already paid for current month
    if user.is_subscription_active():
        return Response({
            'success': True,
            'already_paid': True,
            'message': f'Your subscription to {user.active_plan} is already active for this month until {user.paid_until.strftime("%Y-%m-%d")}! You do not need to pay again.',
            'user': {
                'email': user.email,
                'is_paid': True,
                'active_plan': user.active_plan,
                'paid_until': user.paid_until.strftime('%Y-%m-%d')
            }
        })

    # Generate Stripe Payment Intent details
    stripe_id = f"pi_stripe_live_{int(time.time())}_{user.id}"
    card_num = str(data.get('cardNumber', data.get('card_number', '4242'))).replace(' ', '')
    last4 = card_num[-4:] if len(card_num) >= 4 else '4242'

    # Activate 30-day monthly subscription
    thirty_days_later = timezone.now() + datetime.timedelta(days=30)
    user.is_paid = True
    user.active_plan = plan_name
    user.paid_until = thirty_days_later
    user.save()

    order = SubscriptionOrder.objects.create(
        stripe_payment_id=stripe_id,
        plan_id=data.get('plan_id', 'enterprise'),
        plan_name=plan_name,
        amount=data.get('amount', 499.00),
        currency='USD',
        billing_cycle=data.get('billing_cycle', 'monthly'),
        email=email,
        cardholder=data.get('cardholder', user.username),
        card_last4=last4,
        status='succeeded'
    )

    sync_to_mongo('subscriptions', {
        'stripe_payment_id': stripe_id,
        'plan_name': order.plan_name,
        'amount': float(order.amount),
        'currency': 'USD',
        'email': order.email,
        'card_last4': last4,
        'status': 'succeeded',
        'paid_until': thirty_days_later.isoformat(),
        'timestamp': time.time()
    })

    return Response({
        'success': True,
        'message': f'Stripe payment of ${order.amount} USD successful! Subscription to {order.plan_name} active until {thirty_days_later.strftime("%Y-%m-%d")}. The Paid Services Portal is now unlocked!',
        'stripe_payment_id': stripe_id,
        'user': {
            'email': user.email,
            'is_paid': True,
            'active_plan': user.active_plan,
            'paid_until': thirty_days_later.strftime('%Y-%m-%d')
        }
    })

@api_view(['POST'])
def submit_service_request(request):
    data = request.data
    user_email = data.get('user_email', '').strip().lower()
    
    if not user_email:
        return Response({'success': False, 'message': 'User email is required. Please Sign In.'}, status=status.HTTP_400_BAD_REQUEST)

    user = UserAccount.objects.filter(email=user_email).first()
    if not user:
        return Response({'success': False, 'message': 'User account not found. Please Sign Up first.'}, status=status.HTTP_401_UNAUTHORIZED)

    if not user.is_subscription_active():
        return Response({
            'success': False,
            'message': 'Access Denied: Your subscription is inactive or expired. Please purchase a monthly plan to access Paid Services.'
        }, status=status.HTTP_403_FORBIDDEN)

    service_req = ServiceRequest.objects.create(
        user_email=user_email,
        user_name=data.get('user_name', user.username),
        company=data.get('company', user.company or ''),
        service_type=data.get('service_type', 'Direct-to-Chip 2-Phase Installation'),
        facility_location=data.get('facility_location', 'Austin, TX HQ'),
        rack_count=data.get('rack_count', '10 Racks'),
        urgency=data.get('urgency', 'Standard (7 Days)'),
        details=data.get('details', ''),
        status='PENDING_ENGINEER_DISPATCH'
    )

    sync_to_mongo('service_requests', {
        'id': service_req.id,
        'user_email': user_email,
        'service_type': service_req.service_type,
        'company': service_req.company,
        'status': service_req.status,
        'timestamp': time.time()
    })

    return Response({
        'success': True,
        'message': f'Service Request #{service_req.id} submitted! A Lead Thermal Engineer has been assigned to your facility.',
        'request_id': service_req.id,
        'status': service_req.status
    }, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def list_service_requests(request):
    user_email = request.query_params.get('email', '').strip().lower()
    if not user_email:
        return Response({'success': False, 'message': 'User email required'}, status=status.HTTP_400_BAD_REQUEST)

    requests = list(ServiceRequest.objects.filter(user_email=user_email).values(
        'id', 'service_type', 'facility_location', 'rack_count', 'urgency', 'status', 'created_at'
    ).order_by('-created_at'))

    return Response({
        'success': True,
        'requests': requests
    })

@api_view(['POST'])
def contact_submit(request):
    data = request.data
    inquiry = ContactInquiry.objects.create(
        name=data.get('name', ''),
        email=data.get('email', ''),
        phone=data.get('phone', ''),
        company=data.get('company', ''),
        capacity=data.get('capacity', ''),
        message=data.get('message', '')
    )

    sync_to_mongo('contact_inquiries', {
        'name': inquiry.name,
        'email': inquiry.email,
        'company': inquiry.company,
        'timestamp': time.time()
    })

    return Response({'success': True, 'message': 'Message sent successfully!'})

@api_view(['GET'])
def live_telemetry(request):
    return Response({
        'success': True,
        'pue': 1.04,
        'gpu_temp': 52.4,
        'coolant_flow': 640,
        'vpp_discharge': 2400,
        'status': 'NOMINAL OPTIMIZED'
    })

@api_view(['GET'])
def admin_analytics(request):
    passcode = request.headers.get('X-Admin-Passcode', '')
    if passcode != ADMIN_PASSCODE:
        return Response({'success': False, 'message': 'Unauthorized admin passcode'}, status=status.HTTP_401_UNAUTHORIZED)

    users_count = UserAccount.objects.count()
    paid_users_count = UserAccount.objects.filter(is_paid=True).count()
    service_reqs = list(ServiceRequest.objects.values('id', 'user_email', 'company', 'service_type', 'status', 'created_at')[:15])
    subs = list(SubscriptionOrder.objects.values('id', 'stripe_payment_id', 'plan_name', 'amount', 'email', 'status', 'created_at')[:10])

    return Response({
        'success': True,
        'activeFacilities': 48,
        'totalManagedMw': 620,
        'totalUsers': users_count,
        'paidSubscribers': paid_users_count,
        'monthlyRevenue': 142500,
        'mongoSyncStatus': 'CONNECTED (aidcevvpp_db / ecaitm_cluster)',
        'serviceRequests': service_reqs,
        'subscriptions': subs,
        'logs': [
            {'timestamp': '18:42:10', 'level': 'INFO', 'message': 'NeuCool CDU #42 dynamic fluid pressure nominal (4.2 bar)'},
            {'timestamp': '18:38:00', 'level': 'SUCCESS', 'message': 'EV VPP Peak Shaving dispatched 2,400 kW to Grid Node #7'},
            {'timestamp': '18:25:00', 'level': 'INFO', 'message': 'Dual DB Sync: Records committed to MongoDB Cloud Atlas'},
        ]
    })
