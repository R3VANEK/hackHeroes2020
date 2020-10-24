# Django files import
from django.shortcuts import render
# from django.contrib.auth.models import User

# REST Framework imports
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

# My files import
from .models import UserData
from .serializers import UserDataSerializer

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

@api_view(['POST'])
def addData(request):
    serializer = UserDataSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response("Date added")
    return Response("Request error")


class UserDataView(APIView):
    def getUserData(self, oID):
        try:
            return UserData.objects.get(ownerID=oID)
        except UserData.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        data = self.getUserData(pk)
        serializer = UserDataSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        data = UserData.objects.get(id=pk)
        serializer = UserDataSerializer(instance=data, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response("Data updated")
        return Response("Request error")

    def delete(self, request, pk, format=None):
        data = self.getUserData(pk)
        data.delete()
        return Response('Data succesesfully delete')