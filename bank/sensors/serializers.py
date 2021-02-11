from rest_framework.serializers import CharField, ModelSerializer, JSONField

from .models import SensorData


class SensorDataSerializer(ModelSerializer):
    class Meta:
        model = SensorData
        fields = [
            "name",
            "sensor_type",
            "unit",
            "range_l",
            "range_u",
            "xid",
            "box_id",
            "longitude",
            "latitude",
            "reading",
            "reading_ts",
        ]
