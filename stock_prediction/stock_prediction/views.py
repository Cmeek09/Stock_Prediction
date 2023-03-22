from django.shortcuts import render
from django.shortcuts import HttpResponse

from django.http import JsonResponse
import pandas as pd
import requests


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


def income_statement(request, ticker):
    api_key = 'K9OPGNS5IDET8VU5'
    url = f'https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol={ticker}&apikey={api_key}'
    r = requests.get(url)
    data = r.json()
    df = pd.DataFrame(data['annualReports'])
    df = df.set_index('fiscalDateEnding').transpose()
    return JsonResponse(df.to_dict())


def ticker_input(request):
    return render(request, 'gatherData.html')