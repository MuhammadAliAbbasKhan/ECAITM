from django.db import models
from django.utils import timezone
import datetime

class UserAccount(models.Model):
    username = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255, default='ecaitm123')
    company = models.CharField(max_length=255, blank=True, null=True)
    is_paid = models.BooleanField(default=False)
    active_plan = models.CharField(max_length=100, default='Free Tier')
    paid_until = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_subscription_active(self):
        if not self.is_paid:
            return False
        if self.paid_until and timezone.now() > self.paid_until:
            return False
        return True

    def __str__(self):
        status_str = f"PAID ({self.active_plan})" if self.is_subscription_active() else "FREE"
        return f"{self.username} ({self.email}) - {status_str}"

class DemoLead(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    company = models.CharField(max_length=255)
    capacity = models.CharField(max_length=100)
    timeline = models.CharField(max_length=100, blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.company} ({self.capacity})"

class SubscriptionOrder(models.Model):
    stripe_payment_id = models.CharField(max_length=255, default='pi_stripe_live_ecaitm')
    plan_id = models.CharField(max_length=100)
    plan_name = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=10, default='USD')
    billing_cycle = models.CharField(max_length=50)
    email = models.EmailField()
    cardholder = models.CharField(max_length=255)
    card_last4 = models.CharField(max_length=10, default='4242')
    status = models.CharField(max_length=50, default='succeeded')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.email} - {self.plan_name} (${self.amount} {self.currency}) [{self.stripe_payment_id}]"

class ServiceRequest(models.Model):
    user_email = models.EmailField()
    user_name = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    service_type = models.CharField(max_length=255)
    facility_location = models.CharField(max_length=255)
    rack_count = models.CharField(max_length=100)
    urgency = models.CharField(max_length=50, default='Standard (7 Days)')
    details = models.TextField()
    status = models.CharField(max_length=50, default='PENDING_ENGINEER_DISPATCH')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Service Request #{self.id}: {self.service_type} for {self.company} ({self.status})"

class ContactInquiry(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True, null=True)
    company = models.CharField(max_length=255)
    capacity = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Contact: {self.name} ({self.company})"
