import json

with open('sensor.json') as f:
    data = json.load(f)

x = len(data)
for i in range(x):
    print(data[i]['sensor_id'])
    print(data[i]['device_id'])
    print(data[i]['date_received'])
    print(data[i]['timestamp'])
    print(data[i]['value'])
    