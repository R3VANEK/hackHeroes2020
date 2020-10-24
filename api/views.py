# Django files import
from django.shortcuts import render
from django.http import Http404
# from django.contrib.auth.models import User

# REST Framework imports
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

# My files import
from .models import UserData
from .serializers import UserDataSerializer


@api_view(['GET'])
def showAll(request):
    datas = UserData.objects.all()
    serializer = UserDataSerializer(datas, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def addUserData(request):
        serializer = UserDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Date added")
        return Response("Request error")


@api_view(['GET'])
def getUserData(request, pk):
    try:
        data = UserData.objects.filter(ownerID=pk)
    except UserData.DoesNotExist:
        raise Http404

    serializer = UserDataSerializer(data, many=True)
    return Response(serializer.data)
    

class UserDataView(APIView):
    def put(self, request, pk, format=None):
        try:
            data = UserData.objects.get(id=pk)
        except UserData.DoesNotExist:
            raise Http404

        serializer = UserDataSerializer(instance=data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Data updated")
        return Response("Request error")


    def delete(self, request, pk, format=None):
        try:
            data = UserData.objects.get(id=pk)
        except UserData.DoesNotExist:
            raise Http404
        data.delete()
        return Response('Data succesesfully delete')


