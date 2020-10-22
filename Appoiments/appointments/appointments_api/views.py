from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import Appointment
from .serializers import AppointmentSerializer


class AppointmentViewSet(viewsets.ViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        appointments = Appointment.objects.all().filter(patient = user)
        serializer = AppointmentSerializer(appointments, many = True)

        return Response(serializer.data)

    def post(self, request):
        user = request.user
        patient_email = request.data['patient_email']
        date = request.data['date']
        time = request.data['time']
        Appointment(
            User.objects.filter(email = patient_email),
            user,
            date,
            time
        ).save()

        return Response("New appointment added successfully")

    def put(self, request):
        pass

    def delete(self, request):
        pass
