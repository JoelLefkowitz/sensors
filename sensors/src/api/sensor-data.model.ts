export interface SensorData {
    id: string;
    box_id: string;
    sensor_type: string;
    name: string;
    range_l: Number;
    range_u: Number;
    longitude: Number;
    latitude: Number;
    reading: Number;
    unit: string;
    reading_ts: string;
}

export interface SensorDataType {
    name: string;
    sensor_type: string;
    range_l: Number;
    range_u: Number;
    unit: string;
}

export const sensorDataTypes: SensorDataType[] = [
    {
        name: "Ozone",
        sensor_type: "O3",
        range_l: 0,
        range_u: 1000,
        unit: "ppm",
    }
]