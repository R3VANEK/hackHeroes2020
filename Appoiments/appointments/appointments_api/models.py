from django.db import models
from django.contrib.auth.models import User


class Appointment(models.Model):
    patient = models.ForeignKey(User, related_name='patient', on_delete=models.CASCADE)
    doctor = models.ForeignKey(User, related_name='doctor', on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=False)
    time = models.TimeField(auto_now_add=False)