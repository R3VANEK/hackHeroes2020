from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import Appointment
from .serializers import AppointmentSerializer


class AppointmentViewSet(viewsets.ViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def get(self, request):
        try:
            user = User.objects.filter(id = request.data['user_id'])[0]
            if user.groups.filter(name='doctor'):
                appointments = Appointment.objects.all().filter(doctor = user)
            else:
                appointments = Appointment.objects.all().filter(patient = user)
                
            serializer = AppointmentSerializer(appointments, many = True)
            return Response(serializer.data)

        except KeyError:
            return Response("Not all required data were provided")
        except IndexError:
            return Response("Incorrect user id")

    def post(self, request):
        try:
            user = User.objects.filter(id = request.data['user_id'])[0]
            patient_email = request.data['patient_email']
            date = request.data['date']
            time = request.data['time']
            appointment = Appointment()
            appointment.patient = User.objects.filter(email = patient_email)[0]
            appointment.doctor = user
            appointment.date = date
            appointment.time = time
            appointment.save()
            return Response("New appointment added successfully")
            
        except KeyError:
            return Response("Not all required data were provided")
        except IndexError:
            return Response("Appointment not found")

    def put(self, request):
        try:
            appointment_id = request.data['appointment_id']
            appointment = Appointment.objects.filter(id = appointment_id)[0] 
            date = request.data['date']
            time = request.data['time']
            appointment.date = date
            appointment.time = time
            appointment.save()
            return Response("Appointment edited successfully")

        except KeyError:
            return Response("Not all required data were provided")
        except IndexError:
            return Response("Appointment not found")

    def delete(self, request):
        try:
            appointment_id = request.data['appointment_id']
            appointment = Appointment.objects.filter(id = appointment_id)[0] 
            appointment.delete()
            return Response("Appointment deleted successfully")

        except KeyError:
            return Response("Not all required data were provided")
        except IndexError:
            return Response("Appointment not found")
