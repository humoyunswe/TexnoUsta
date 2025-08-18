#!/usr/bin/env python
"""
Скрипт для тестирования SMTP настроек Django
Запустите: python test_smtp.py
"""

import os
import django

# Настройка Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from django.core.mail import send_mail
from django.conf import settings

def test_smtp():
    """Тестирует SMTP настройки"""
    try:
        print("Тестирование SMTP настроек...")
        print(f"EMAIL_HOST: {settings.EMAIL_HOST}")
        print(f"EMAIL_PORT: {settings.EMAIL_PORT}")
        print(f"EMAIL_HOST_USER: {settings.EMAIL_HOST_USER}")
        print(f"DEFAULT_FROM_EMAIL: {settings.DEFAULT_FROM_EMAIL}")
        
        # Отправляем тестовый email
        subject = 'Тест SMTP настроек'
        message = 'Это тестовое сообщение для проверки SMTP настроек.'
        
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )
        
        print("✅ Email успешно отправлен! SMTP настройки работают корректно.")
        
    except Exception as e:
        print(f"❌ Ошибка отправки email: {e}")
        print("\nПроверьте:")
        print("1. Правильность email и пароля в settings.py")
        print("2. Включена ли двухфакторная аутентификация в Gmail")
        print("3. Создан ли пароль приложения")
        print("4. Правильность SMTP сервера и порта")

if __name__ == '__main__':
    test_smtp()
