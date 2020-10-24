from django.db import models

# Create your models here.

class UserData(models.Model):
    ownerID     = models.IntegerField(blank=False)  
    date_added  = models.DateTimeField(auto_now_add=True)
    mood        = models.IntegerField(blank=True)
    temperature = models.FloatField(blank=True)
    sleepTime   = models.FloatField(blank=True)
    pulse       = models.IntegerField(blank=True)