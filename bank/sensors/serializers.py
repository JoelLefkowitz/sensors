from rest_framework.serializers import ModelSerializer

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
