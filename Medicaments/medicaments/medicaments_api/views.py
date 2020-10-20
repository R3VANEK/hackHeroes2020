from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from medicaments_api.models import Medicament, MedicamentInjectionDate
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from medicaments_api.serializers import MedicamentSerializer, MedicamentInjectionDateSerializer



class MedicamentsViewSet(viewsets.ViewSet):
    queryset = Medicament.objects.all()
    serializer_class = MedicamentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user_id = request.user.id
        medicaments = Medicament.objects.filter(patient__id = user_id)
        for medicament in medicaments:
            medicament.medicament_date = MedicamentInjectionDate.objects.filter(medicament = medicament)        
        serializer = MedicamentSerializer(medicaments, many = True)
        return Response(serializer.data)


    def post(self, request):
        user_id = request.user.id #Doctor's id
        patient_email = request.data['patient_email']
        for medicament in request.data['medicaments']:
            new_medicament = Medicament()
            new_medicament.medicament = medicament['medicament']
            new_medicament.injection = medicament['injection']
            new_medicament.patient = User.objects.filter(email = patient_email)[0]
            new_medicament.doctor = User.objects.filter(id = user_id)[0]
            new_medicament.save()
            for date in medicament['dates']:
                new_medicament_date = MedicamentInjectionDate()
                new_medicament_date.medicament = new_medicament
                new_medicament_date.hour = date["hour"]
                new_medicament_date.minute = date["minute"]
                new_medicament_date.save()

        return Response("Medicaments added succesfuly!")


    def put(self, request):
        medicament = Medicament.objects.filter(id = request.data['medicament_id'])[0]
        medicament_dates = MedicamentInjectionDate.objects.filter(medicament = medicament)
        medicament.medicament = request.data['medicament']
        medicament.injection = request.data['injection']
        medicament.save()

        for date in medicament_dates:
            date.delete()
        
        for date in request.data['dates']:
            new_medicament_date = MedicamentInjectionDate()
            new_medicament_date.medicament = medicament
            new_medicament_date.hour = date["hour"]
            new_medicament_date.minute = date["minute"]
            new_medicament_date.save()

        return Response("Medicament edited succesfuly")
        

    def delete(self, request):
        medicament_id = request.data['medicament_id']
        medicament = Medicament.objects.filter(id = medicament_id)
        medicament.delete()
        return Response("Medicament deleted successfully")
