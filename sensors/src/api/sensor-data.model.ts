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
        sensor_type: "RH",
        unit: "%",
        name: "Relative humidity",
        range_l: 0.0,
        range_u: 100.0,
    },
    {
        sensor_type: "O3",
        unit: "ppm",
        name: "Ozone",
        range_l: 0.0,
        range_u: 1000.0,
    },
    {
        sensor_type: "NO2",
        unit: "ppm",
        name: "Nitrogen dioxide",
        range_l: 0.0,
        range_u: 1000.0,
    },
    {
        sensor_type: "CO",
        unit: "ppm",
        name: "Carbon monoxide",
        range_l: 0.0,
        range_u: 1000.0,
    },
    {
        sensor_type: "TEMP",
        unit: "\u00baC",
        name: "Ambient temperature",
        range_l: -20.0,
        range_u: 80.0,
    },
];
