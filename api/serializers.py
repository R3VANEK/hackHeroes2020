from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
                    'groups',
                    'username',
                    'first_name',
                    'last_name',
                    'email',
                    'password',

                    'date_of_birth',
                    'city',
                    'specialization'
                ]