# Настройка SMTP для отправки email

## Настройка Gmail SMTP

1. **Включите двухфакторную аутентификацию** в вашем Google аккаунте
2. **Создайте пароль приложения**:
   - Перейдите в настройки безопасности Google
   - Выберите "Пароли приложений"
   - Создайте новый пароль для "Почта"
   - Скопируйте сгенерированный пароль

3. **Обновите настройки в `core/settings.py`**:
   ```python
   EMAIL_HOST_USER = 'your-email@gmail.com'  # замените на вашу почту
   EMAIL_HOST_PASSWORD = 'your-app-password'  # замените на пароль приложения
   DEFAULT_FROM_EMAIL = 'your-email@gmail.com'  # замените на вашу почту
   ```

## Альтернативные SMTP серверы

### Yandex
```python
EMAIL_HOST = 'smtp.yandex.ru'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
```

### Mail.ru
```python
EMAIL_HOST = 'smtp.mail.ru'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
```

### Outlook/Hotmail
```python
EMAIL_HOST = 'smtp-mail.outlook.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
```

## Тестирование

После настройки SMTP:
1. Заполните форму на главной странице
2. Проверьте, что email пришел на указанную почту
3. Проверьте, что заявка сохранилась в админ панели

## Безопасность

- Никогда не коммитьте реальные пароли в Git
- Используйте переменные окружения для продакшена
- Регулярно обновляйте пароли приложений
