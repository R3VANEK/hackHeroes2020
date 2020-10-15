from rest_framework import routers, serializers, viewsets
from .models import Medicament, MedicamentInjectionDate


class MedicamentInjectionDateSeralizer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MedicamentInjectionDate
        fields = ['id', 'hour', 'minute']


class MedicamentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Medicament
        fields = ['id', 'medicament', 'injection', ]