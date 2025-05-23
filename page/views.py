from django.shortcuts import render
from django.utils import timezone


def index(request):
    date_year = timezone.now().year
    return render(request, 'page/index.html', {'date_year': date_year})


