from rest_framework import routers, serializers, viewsets
from .models import Medicament, MedicamentInjectionDate
from django.contrib.auth.models import User


class MedicamentInjectionDateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MedicamentInjectionDate
        fields = ['id', 'hour', 'minute']


class DoctorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name']


class MedicamentSerializer(serializers.HyperlinkedModelSerializer):
    medicament_date = MedicamentInjectionDateSerializer(many = True)
    doctor = DoctorSerializer()

    class Meta:
        model = Medicament
        fields = ['id', 'medicament', 'injection', 'doctor', 'medicament_date']