from django.db import models

class NewsHeadline(models.Model):
    ticker = models.CharField(max_length=10)
    headline = models.CharField(max_length=255)
    date = models.DateField()
