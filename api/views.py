from django.shortcuts import render
from django.http import JsonResponse, Http404

# REST Framework imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
# from rest_framework import status

# My files import
from .serializers import *
from .models import *


@api_view(['GET'])
def apiOverview(request):
    return Response([
        {
            'GET': '',
            'POST': '',
        },
        {
            'GET': '/:id',
            'PUT': '/:id',
            'DELETE': '/:id',
        },
        {
            'GET': '/all'
        }
    ])
    


@api_view(['GET'])
def getAllUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


class UserView(APIView):
    def get(self, request, format=None):
        #
        #
        #
        return Response({'siema': 'dziala'})

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response("User created")
        return Response("Request error")


class SpecUserView(APIView):
    def getUser(self, pk):
        try:
            return User.objects.get(id=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user = self.getUser(pk)
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        user = self.getUser(pk)
        serializer = UserSerializer(instance=user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response("User updated")
        return Response("Request error")

    def delete(self, request, pk, format=None):
        user = self.getUser(pk)
        user.delete()
        return Response('User succesesfully delete')



userView = UserView()
specUserView = SpecUserView()