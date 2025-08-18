import json
from django.shortcuts import render, redirect
from django.utils import timezone
from django.contrib.auth.decorators import login_required
from django.db.models import Max, Count
from django.core.mail import send_mail
from django.conf import settings

from .models import PhoneClick, ViewCounter, RepairOrder, CallMasterRequest

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

from .forms import CallMasterForm



def track_view(request, page_name):
    ViewCounter.add_view(request, page_name)


def index(request):
    track_view(request, 'index')
    callmaster_form = CallMasterForm()
    if request.method == 'POST':
        callmaster_form = CallMasterForm(request.POST)
        if callmaster_form.is_valid():
            phone = callmaster_form.cleaned_data['phone']
            ip = request.META.get('REMOTE_ADDR')
            user_agent = request.META.get('HTTP_USER_AGENT', '')
            
            # Сохраняем в базу данных
            CallMasterRequest.objects.create(phone=phone, ip_address=ip, user_agent=user_agent)
            
            # Отправляем email
            try:
                subject = 'Новая заявка на вызов мастера'
                message = f'''
Новая заявка на вызов мастера!

Номер телефона: {phone}
IP адрес: {ip}
Время заявки: {timezone.now().strftime('%d.%m.%Y %H:%M')}
User Agent: {user_agent}

Заявка автоматически сохранена в админ панели.
                '''
                
                send_mail(
                    subject=subject,
                    message=message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.EMAIL_HOST_USER],  # отправляем на вашу почту
                    fail_silently=False,
                )
                print(f"Email успешно отправлен на {settings.EMAIL_HOST_USER}")
            except Exception as e:
                # Логируем ошибку, но не прерываем выполнение
                print(f"Ошибка отправки email: {e}")
                print(f"Проверьте настройки SMTP в settings.py")
            
            request.session['client_phone'] = phone
            return redirect('thank_you')
    date_year = timezone.now().year
    return render(request, 'page/index.html', {
        'date_year': date_year,
        'callmaster_form': callmaster_form,
    })


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
    callmaster_requests = CallMasterRequest.objects.order_by('-created_at')
    
    context = {
        'monthly_views': monthly_views,
        'page_stats': page_stats,
        'phone_clicks': phone_clicks,
        'current_month': current_month.strftime('%B %Y'),
        'orders': orders,
        'callmaster_requests': callmaster_requests,
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


def thank_you(request):
    phone = request.session.get('client_phone', None)
    return render(request, 'page/thank_you.html', {'phone': phone})

@csrf_exempt
def delete_callmaster_request(request, request_id):
    if request.method == 'DELETE':
        try:
            from .models import CallMasterRequest
            req = CallMasterRequest.objects.get(id=request_id)
            req.delete()
            return JsonResponse({'success': True})
        except CallMasterRequest.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Not found'})
    return JsonResponse({'success': False, 'error': 'Invalid request'})


def refrigerator(request):
    track_view(request, 'refrigerator')
    callmaster_form = CallMasterForm()
    if request.method == 'POST':
        callmaster_form = CallMasterForm(request.POST)
        if callmaster_form.is_valid():
            phone = callmaster_form.cleaned_data['phone']
            ip = request.META.get('REMOTE_ADDR')
            user_agent = request.META.get('HTTP_USER_AGENT', '')
            CallMasterRequest.objects.create(phone=phone, ip_address=ip, user_agent=user_agent)
            request.session['client_phone'] = phone
            return redirect('thank_you')
    date_year = timezone.now().year
    return render(request, 'page/refrigerator.html', {
        'date_year': date_year,
        'callmaster_form': callmaster_form,
    })





