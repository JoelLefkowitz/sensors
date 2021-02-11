import { Paginated } from "./paginator.model";
import { SensorData } from "./sensor-data.model";

type Rename<T, K extends keyof T, N extends string> = Pick<T, Exclude<keyof T, K>> & { [P in N]: T[K] }

export type SensorDataPayload = Rename<SensorData, 'id', 'xid'>

export function paginatedXidToId(paginatedPayload: Paginated<SensorDataPayload>): Paginated<SensorData> {
    let output = {} as Paginated<SensorData>;
    output.count = paginatedPayload.count;
    output.previous = paginatedPayload.previous;
    output.next = paginatedPayload.next;
    output.results = paginatedPayload.results.map(
        (sensorData: SensorDataPayload) => {
            sensorData['id'] = sensorData.xid
            delete sensorData.xid
            let out = sensorData as unknown
            return out as SensorData
        }
    )
    return output;
}