from django.db.models import CharField, FloatField, Model


class SensorData(Model):
    name = CharField(max_length=100)
    sensor_type = CharField(max_length=100)
    unit = CharField(max_length=100)
    range_l = FloatField()
    range_u = FloatField()

    xid = CharField(max_length=100)
    box_id = CharField(max_length=100)

    longitude = FloatField()
    latitude = FloatField()
    reading = FloatField()
    reading_ts = CharField(max_length=100)
