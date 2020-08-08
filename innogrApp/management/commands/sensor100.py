from django.core.management.base import BaseCommand
from urllib.request import urlopen, Request
import requests
import json
from innogrApp.models import Sensor
class Command(BaseCommand):
    help = "collect current sensor data"
    # define logic of command
    def handle(self, *args, **options):
        # collect json data from wazi api
        
        urlTC = "https://api.waziup.io/api/v2/sensors_data?sort=dsc&calibrated=true&limit=100&device_id=INNOGRDEVICEPK&sensor_id=InnogrTC"
        urlHUM = "https://api.waziup.io/api/v2/sensors_data?sort=dsc&calibrated=true&limit=100&device_id=INNOGRDEVICEPK&sensor_id=InnogrHUM"
        urlWL = "https://api.waziup.io/api/v2/sensors_data?sort=dsc&calibrated=true&limit=100&device_id=INNOGRDEVICEPK&sensor_id=InnogrWL"
        urlWM = "https://api.waziup.io/api/v2/sensors_data?sort=dsc&calibrated=true&limit=100&device_id=INNOGRDEVICEPK&sensor_id=InnogrWM"
        urlLI = "https://api.waziup.io/api/v2/sensors_data?sort=dsc&calibrated=true&limit=100&device_id=INNOGRDEVICEPK&sensor_id=InnogrLI"
        
        sensor = [urlTC,urlHUM,urlWL,urlWM, urlLI]
        
        for urllink in sensor:
            contentsensor = requests.get(urllink)
            data = contentsensor.json()

            x = len(data)
            for i in range(x):
                snid = data[i]['sensor_id']
                dvid = data[i]['device_id']
                dateR = data[i]['date_received']
                timeS = data[i]['timestamp']
                snval = data[i]['value']
                # check if url in db
                try:
                    # save in db
                    Sensor.objects.create(
                        sensorname=snid,
                        devicename=dvid,
                        sensorvalue=snval,
                        date_recieved=dateR,
                        timestamp=timeS
                    )
                    print('%s added' % (snid,))
                except:
                    print('%s already exists' % (snid,))
        self.stdout.write( 'Sensor job complete' )
    