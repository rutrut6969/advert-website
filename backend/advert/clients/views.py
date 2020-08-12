from django.shortcuts import render
from rest_framework import viewsets, status, permissions
from .serializers import ClientSerializer
from rest_framework.response import Response
from .models import Client

# Create your views here.


class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
