import json
from django.shortcuts import render, redirect
from django.utils import timezone
from django.contrib.auth.decorators import login_required
from django.db.models import Max, Count

from .models import PhoneClick, ViewCounter, RepairOrder

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse



def track_view(request, page_name):
    ViewCounter.add_view(request, page_name)


def index(request):
    track_view(request, 'index')
    if request.method == 'POST':
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        service = request.POST.get('service')
        problem = request.POST.get('problem', '')
        address = request.POST.get('address', '')
        urgent = bool(request.POST.get('urgent'))
        RepairOrder.objects.create(
            name=name,
            phone=phone,
            service=service,
            problem=problem,
            address=address,
            urgent=urgent
        )
        return redirect('index')
    date_year = timezone.now().year
    return render(request, 'page/index.html', {'date_year': date_year})


@login_required(login_url='users:login')
def admin_dashboard(request):
    monthly_views = ViewCounter.get_monthly_stats()
    
    current_month = timezone.now().date().replace(day=1)
    page_stats = ViewCounter.objects.filter(month=current_month).values('page').annotate(
        view_count=Count('id')
    ).order_by('-view_count')
    phone_clicks = PhoneClick.objects.values('phone').annotate(
    unique_clicks=Count('id')
    ).order_by('-unique_clicks')
    
    orders = RepairOrder.objects.order_by('-created_at')
    
    context = {
        'monthly_views': monthly_views,
        'page_stats': page_stats,
        'phone_clicks': phone_clicks,
        'current_month': current_month.strftime('%B %Y'),
        'orders': orders
    }
    return render(request, 'page/admin_dashboard.html', context)


@csrf_exempt
def update_order_status(request, order_id):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            status = data.get('status')
            from .models import RepairOrder
            order = RepairOrder.objects.get(id=order_id)
            order.status = status
            order.save()
            return JsonResponse({'success': True})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})
    return JsonResponse({'success': False, 'error': 'Invalid request'})


@csrf_exempt
def delete_order(request, order_id):
    if request.method == 'DELETE':
        try:
            order = RepairOrder.objects.get(id=order_id)
            order.delete()
            return JsonResponse({'success': True})
        except RepairOrder.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Order not found'})
    return JsonResponse({'success': False, 'error': 'Invalid request'})



@csrf_exempt
def phone_click(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        phone = data.get('phone')
        ip = request.META.get('REMOTE_ADDR')
        user_agent = request.META.get('HTTP_USER_AGENT', '')
        day = timezone.now().date()
        PhoneClick.objects.get_or_create(
            phone=phone,
            ip_address=ip,
            user_agent=user_agent,
            day=day
        )
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})

