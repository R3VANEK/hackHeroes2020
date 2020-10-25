from django.contrib import admin
from django.urls import path
from medicaments_api.views import MedicamentsViewSet


urlpatterns = [
    path('admin/', admin.site.urls),
    path('medicaments/', MedicamentsViewSet.as_view({'get': 'get'})),
]
