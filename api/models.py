from django.db import models
from django.contrib.auth.models import User


class AdditionalData(models.Model):
    birthday = models.DateField(blank=False)
    phone_number = models.CharField(max_length=13)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    #Doctor's only data
    city = models.CharField(max_length=200, blank=True)
    specialization = models.CharField(max_length=200, blank=True)
    positive_rates = models.IntegerField(blank=True)
    negative_rates = models.IntegerField(blank=True)

