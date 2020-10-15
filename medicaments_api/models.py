from django.db import models
from django.contrib.auth.models import User


class Medicament(models.Model):
    medicament = models.CharField(max_lenght=150)
    injection = models.CharField(max_lenght=300)
    patient = models.ForeignKey(User, on_delete=models.CASCADE)
    doctor = models.ForeignKey(User, on_delete=models.CASCADE)


class MedicamentInjectionDate(models.Model):
    medicament = models.ForeignKey(Medicament, on_delete=models.CASCADE)
    hour = models.CharField(max_length=2)
    minute = models.CharField(max_length=2)
