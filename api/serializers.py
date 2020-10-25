from rest_framework import routers, serializers, viewsets
from .models import AdditionalData
from django.contrib.auth.models import User, Group



class GroupSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Group
        fields = ('name',)

class AdditionalDataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AdditionalData
        fields = [
            'birthday',
            'city',
            'specialization',
            'phone_number'
            'positive_rates',
            'negative_rates'
        ]

class UserSerializer(serializers.HyperlinkedModelSerializer):
    additional_data = AdditionalDataSerializer(many=True)
    groups = GroupSerializer(many=True)

    class Meta:
        model = User
        fields = [
            'id',
            'first_name',
            'last_name',
            'groups',
            'additional_data'
        ]