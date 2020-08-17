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
        
        Sensor.objects.all().delete()
        
        self.stdout.write( 'Sensor job complete' )
    