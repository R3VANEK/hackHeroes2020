from django.contrib import admin
from django.urls import path
from appointments_api.views import AppointmentViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('appointments/', AppointmentViewSet.as_view({'get': 'get', 'post': 'post', 'put': 'put', 'delete': 'delete'}))
]
