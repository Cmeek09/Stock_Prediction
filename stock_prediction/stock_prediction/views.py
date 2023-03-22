from django.shortcuts import render
from django.shortcuts import HttpResponse


# home page / landing page
# home page / landing page
def home_page(request):
    return HttpResponse('''
        <h1>Main Stock Page</h1>
        <ul>
            <li><a href="/calendar/">Calendar</a></li>
            <li><a href="/gatherData/">Pull stock features</a></li>
        </ul>
    ''')


# claendar for finanacial dates
def calendar_page(request):
    return render(request, 'calendar.html')


# gather data page
def getData_page(request):
    return render(request, 'gatherData.html')