from rest_framework import serializers
from .models import Appointment
from django.contrib.auth.models import User



class DoctorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name']


class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name']

 
class AppointmentSerializer(serializers.HyperlinkedModelSerializer):
    patient = PatientSerializer()
    doctor = DoctorSerializer()

    class Meta:
        model = Appointment
        fields = ['id', 'date', 'time', 'doctor', 'patient']