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
    reading_ts: Date
}
