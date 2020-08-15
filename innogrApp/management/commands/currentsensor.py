from django.core.management.base import BaseCommand
from urllib.request import urlopen, Request
import requests
import json
from innogrApp.models import Currentreading
class Command(BaseCommand):
    help = "collect current sensor data"
    # define logic of command
    def handle(self, *args, **options):
        # collect json data from wazi api
        currentreadingget =  requests.get('https://api.waziup.io/api/v2/devices/INNOGRDEVICEPK/sensors')
        data = currentreadingget.json()

        x = len(data)
        for i in range(x):
            name = data[i]['name']
            val = data[i]['value']['value']
            daterecieved = data[i]['value']['date_received']
            # check if url in db
            try:
                # save in db
                
                Currentreading.objects.filter(name=name).update(
                    
                    sensorval=val,
                    date_recieved=daterecieved 
                    
                )

                print('%s updated' % (name,))
            except:
                print('%s already exists' % (name,))
        self.stdout.write( 'Current Sensor job complete' )
