from django.contrib import admin
from .models import RepairOrder, ViewCounter, PhoneClick

@admin.register(RepairOrder)
class RepairOrderAdmin(admin.ModelAdmin):
    list_display = ("name", "phone", "service", "urgent", "created_at")
    list_filter = ("service", "urgent", "created_at")
    search_fields = ("name", "phone", "service", "address", "problem")

admin.site.register(PhoneClick)
admin.site.register(ViewCounter)