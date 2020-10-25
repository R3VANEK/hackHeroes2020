from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate
from .models import AdditionalData
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer, AdditionalDataSerializer


class UserViewSet(viewsets.ViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request):
        try:
            email = request.data['email']
            password = request.data['password']
            authenticated_user = authenticate(username=email, password=password)
            if authenticated_user is not None:
                authenticated_user.additional_data = AdditionalData.objects.filter(user=authenticated_user)
                serialized_user = UserSerializer(authenticated_user)
                return Response(serialized_user.data)
            else:
                return Response("Wrong email or password")
        except KeyError:
            return Response("Not all data was provided")
        except IndexError:
            return Response("This user does not have an additional data")

    def post(self, request):
        new_user = User.objects.create_user(
            username=request.data['email'],
            email=request.data['email'],
            password=request.data['password'],
            first_name=request.data['firstName'],
            last_name=request.data['lastName'])

        new_user.groups.add(Group.objects.filter(name = request.data['role'])[0])

        if request.data['role'] == "doctor":
            additional_data = AdditionalData(
                user = new_user,
                birthday=request.data['birthday'],
                phone_number=request.data['phoneNumber'],
                city = request.data['city'],
                specialization = request.data['specialization'],
                positive_rates=0,
                negative_rates=0 
            ).save()

            new_user.additional_data = additional_data
            serialized_user = UserSerializer(new_user, context={'request': request})

            return Response(serialized_user.data)

        else:
            additional_data = AdditionalData(
                user = new_user,
                birthday=request.data['birthday'],
                phone_number=request.data['phoneNumber'],
            ).save()

            new_user.additional_data = additional_data
            serialized_user = UserSerializer(new_user, context={'request': request})

            return Response(serialized_user.data)

    def put(self, request):
        try:
            user = User.objects.filter(id=request.data['user_id'])[0]
            additional_data = AdditionalData.objects.filter(user=user)[0]
            user.email = request.data['email']
            user.first_name = request.data['firstName']
            user.last_name = request.data['lastName']
            additional_data.birthday = request.data['birthday']
            additional_data.phone_number = request.data['phoneNumber']
            if user.groups.filter(name='doctor'):
                additional_data.city = request.data['city']
                additional_data.specialization = request.data['specialization']

            user.save()
            additional_data.save()
            
            return Response("User edited successfully")
        except KeyError:
            return Response("Not all data were provided")
        except IndexError:
            return Response("Incorrect user")



    def delete(self, request):
        user = User.objects.filter(id=request.data['user_id'])[0]
        password = request.data['password']
        authenticated_user = authenticate(username=user.email, password=password)
        if authenticated_user is not None:
            authenticated_user.delete()
            return Response("User deleted successfully")
        else:
            return Response("Password is incorrect")

@api_view(['GET'])           
def get_all_doctors(request):
  doctors = User.objects.filter(groups__name__in=['doctor'])
  for doctor in doctors:
    doctor.additional_data = AdditionalData.objects.filter(user = doctor)
  serializer = UserSerializer(doctors, many = True)
  return Response(serializer.data)