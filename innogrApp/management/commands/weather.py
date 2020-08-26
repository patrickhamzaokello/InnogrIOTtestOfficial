from django.core.management.base import BaseCommand
from urllib.request import urlopen, Request
import requests
import json
from innogrApp.models import Weather
import datetime
class Command(BaseCommand):
    help = "collect weather data data"
    # define logic of command
    def handle(self, *args, **options):
        # collect json data from wazi api
        url = 'http://api.openweathermap.org/data/2.5/weather?q=Lira&appid=b119f9cb970a5b73d8ea0199d861eb71&units=metric'
        weatherdata =  requests.get(url)
        data = weatherdata.json()

        district = data['name']
        temp = data['main']['temp']
        hum = data['main']['humidity']
        windsp = data['wind']['speed']
        maindes = data['weather'][0]['main']
        desc = data['weather'][0]['description']

        try:                            
            obj = Weather.objects.get(district=district)
            Weather.objects.filter(district=district).update(
                district = district,
                temp = temp,
                hum = hum,
                windsp = windsp,
                maindes = maindes,
                desc = desc                                    
            )
            print('%s updating' % (district,))
            
        except Weather.DoesNotExist:                
            obj = Weather(district=district, temp = temp , hum = hum, windsp = windsp, maindes = maindes, desc = desc)
            obj.save()
            
            print('%s creating weather records for ' % (district,))

      

        self.stdout.write( 'Weather Update Complete' )
