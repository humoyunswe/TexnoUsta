from django.db import models
from django.utils import timezone


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

