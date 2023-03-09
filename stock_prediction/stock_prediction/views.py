from django.shortcuts import render
from django.shortcuts import HttpResponse


# home page / landing page
def home_page(request):
    return HttpResponse('<h1> Main Stock Page.<a href="/calendar/">Calendar</a>')


# claendar for finanacial dates
def calendar_page(request):
    return render(request, 'calendar.html')