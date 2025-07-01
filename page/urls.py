from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('admin-dashboard/', views.admin_dashboard, name='admin_dashboard'),
    path('update-order-status/<int:order_id>/', views.update_order_status, name='update_order_status'),
    path('delete-order/<int:order_id>/', views.delete_order, name='delete_order'),
    path('phone-click/', views.phone_click, name='phone_click'),
    path('thank-you/', views.thank_you, name='thank_you'),
    path('delete-callmaster-request/<int:request_id>/', views.delete_callmaster_request, name='delete_callmaster_request'),
]