from rest_framework.viewsets import ModelViewSet

from .models import SensorData
from .serializers import SensorDataSerializer


class SensorDataViewSet(ModelViewSet):
    queryset = SensorData.objects.all()
    serializer_class = SensorDataSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        queryset = self.sort_queryset(queryset)
        page = self.paginate_queryset(queryset)

        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def filter_queryset(self, queryset):
        sensor_type = self.request.query_params.get(
            "sensor_type", None
        )

        if sensor_type:
            queryset = queryset.filter(sensor_type=sensor_type)

        return queryset

    def sort_queryset(self, queryset):
        if (
            self.request.query_params.get("sortBy", None)
            == "reading_ts"
        ):
            return sorted(queryset, key=lambda x: x.reading_ts)

        elif (
            self.request.query_params.get("sortBy", None) == "reading"
        ):
            return sorted(queryset, key=lambda x: x.reading)

        else:
            return queryset
