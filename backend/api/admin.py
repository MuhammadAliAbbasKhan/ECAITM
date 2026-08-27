from django.contrib import admin
from .models import UserAccount, DemoLead, SubscriptionOrder, ServiceRequest, ContactInquiry

@admin.register(UserAccount)
class UserAccountAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'company', 'is_paid', 'active_plan', 'paid_until', 'created_at')
    list_filter = ('is_paid', 'active_plan', 'created_at')
    search_fields = ('username', 'email', 'company')

@admin.register(SubscriptionOrder)
class SubscriptionOrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'stripe_payment_id', 'email', 'plan_name', 'amount', 'currency', 'card_last4', 'status', 'created_at')
    list_filter = ('plan_name', 'status', 'billing_cycle', 'created_at')
    search_fields = ('email', 'cardholder', 'stripe_payment_id', 'plan_name')

@admin.register(ServiceRequest)
class ServiceRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'user_email', 'company', 'service_type', 'urgency', 'status', 'created_at')
    list_filter = ('status', 'urgency', 'service_type', 'created_at')
    search_fields = ('user_email', 'company', 'service_type', 'facility_location')

@admin.register(DemoLead)
class DemoLeadAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'company', 'capacity', 'timeline', 'created_at')
    search_fields = ('name', 'email', 'company')

@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'company', 'capacity', 'created_at')
    search_fields = ('name', 'email', 'company')
