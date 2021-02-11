export interface SensorData {
    id: string,
    box_id: string,
    sensor_type: string,
    name: string,
    range_l: Number,
    range_u: Number,
    longitude: Number,
    latitude: Number,
    reading: Number,
    unit: string,
    reading_ts: string
}

export const mockSensorData = {
    "id": "Box-A1-O3",
    "box_id": "Box-A1",
    "sensor_type": "O3",
    "name": "Ozone",
    "range_l": 0,
    "range_u": 1000,
    "longitude": -0.06507,
    "latitude": 51.51885,
    "reading": 817,
    "unit": "ppm",
    "reading_ts": "2019-09-10T00:00:00"
  }