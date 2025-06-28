from django.db import models
from django.utils import timezone

# Create your models here.

class ViewCounter(models.Model):
    ip_address = models.GenericIPAddressField()
    user_agent = models.TextField()
    page = models.CharField(max_length=100)
    viewed_at = models.DateTimeField(auto_now_add=True)
    month = models.DateField()

    class Meta:
        unique_together = ('ip_address', 'user_agent', 'page', 'month')

    @classmethod
    def add_view(cls, request, page):
        current_month = timezone.now().date().replace(day=1)
        cls.objects.get_or_create(
            ip_address=request.META.get('REMOTE_ADDR'),
            user_agent=request.META.get('HTTP_USER_AGENT', ''),
            page=page,
            month=current_month
        )

    @classmethod
    def get_monthly_stats(cls):
        current_month = timezone.now().date().replace(day=1)
        return cls.objects.filter(month=current_month).count()

class RepairOrder(models.Model):
    STATUS_CHOICES = [
        ('new', 'Новая'),
        ('in_progress', 'В работе'),
        ('completed', 'Выполнено'),
        ('cancelled', 'Отменено'),
    ]
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=30)
    service = models.CharField(max_length=50)
    problem = models.TextField(blank=True)
    address = models.CharField(max_length=255, blank=True)
    urgent = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')

    def __str__(self):
        return f"{self.name} — {self.phone} — {self.service}"


class PhoneClick(models.Model):
    phone = models.CharField(max_length=30)
    ip_address = models.GenericIPAddressField()
    user_agent = models.TextField()
    clicked_at = models.DateTimeField(auto_now_add=True)
    day = models.DateField()

    class Meta:
        unique_together = ('phone', 'ip_address', 'user_agent', 'day')

    def __str__(self):
        return f"{self.phone} — {self.ip_address} — {self.day}"