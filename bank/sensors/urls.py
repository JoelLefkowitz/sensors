from django.urls import path
from .views import SensorDataViewSet

urlpatterns = [
    path("", SensorDataViewSet.as_view({"get": "list", "post": "create"})),
]
