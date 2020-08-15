from django.core.management.base import BaseCommand
from urllib.request import urlopen, Request
import requests
import json
from innogrApp.models import Currentreading
import datetime
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
                
                # Currentreading.objects.create(
                #     name=name,
                #     sensorval=val,
                #     date_recieved=daterecieved
                # )
                
                obj = Currentreading.objects.get(name=name)
                
                Currentreading.objects.filter(name=name).update(
                    
                    name=name,
                    sensorval=val,
                    date_recieved=daterecieved,
                    # last_update =  datetime.datetime.now()
                                       
                )
                print('%s updating' % (name,))
                
            except Currentreading.DoesNotExist:                
                obj = Currentreading(name=name,sensorval=val, date_recieved=daterecieved)
                obj.save()
                
                print('%s creating' % (name,))
        self.stdout.write( 'Current Sensor job complete' )
