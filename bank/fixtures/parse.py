import argparse
import json
import os

parser = argparse.ArgumentParser("Sensor data parser")
parser.add_argument("--input", help="Input file", required=True)
parser.add_argument(
    "--output", help="Output destination", required=True
)

if __name__ == "__main__":
    args = parser.parse_args()

    with open(args.input, "r") as input_stream, open(
        args.output, "w"
    ) as output_stream:
        output_stream.write("[\n")

        for index, obj in enumerate(input_stream):
            obj = json.loads(obj)
            obj["xid"] = obj.pop("id")

            output_stream.write(
                json.dumps(
                    {
                        "model": "sensors.sensordata",
                        "pk": index,
                        "fields": obj,
                    }
                )
                + ",\n"
            )

    with open(args.output, "rb+") as output_stream:
        output_stream.seek(-2, os.SEEK_END)
        output_stream.truncate()

    with open(args.output, "a") as output_stream:
        output_stream.write("\n]")
