from django.contrib import admin
from django.urls import path
from medicaments_api.views import MedicamentsViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('medicaments/', MedicamentsViewSet.as_view({'get': 'get'})),
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/refresh/', TokenRefreshView.as_view()),
]
