from rest_framework import serializers
from .models import *

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
                    'username',
                    'first_name',
                    'last_name',
                    'email',
                    'password',
                    'date_of_birth',
                ]