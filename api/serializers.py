from rest_framework import serializers
from .models import UserData


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ['id','ownerID', 'mood', 'temperature', 'sleepTime', 'pulse']