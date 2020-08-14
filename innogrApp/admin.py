from django.contrib import admin
from .models import Post,NewsArticle,Comment,Sensor,Preference,Currentreading,Job
# Register your models here.


class PostAdmin(admin.ModelAdmin):
    list_filter = ['date_posted']
    search_fields = ['summary']
    list_display = ('title','date_posted','last_edited','author','likes','dislikes')
    


class NewsAdmin(admin.ModelAdmin):
    # list_filter = ['newsdate']
    search_fields = ['title']
    list_display = ('title','newsdate')
    
# sensor
class SensorAdmin(admin.ModelAdmin):
    list_filter = ['sensorname','date_recieved']
    search_fields = ['sensorname']
    list_display = ('sensorname','devicename','sensorvalue','date_recieved','timestamp')


class CurrentsensorAdmin(admin.ModelAdmin):
    list_filter = ['last_update']
    search_fields = ['name']
    list_display = ('name','sensorval','date_recieved','last_update')
   
    

admin.site.register(Comment)
admin.site.register(Preference)    
admin.site.register(Post,PostAdmin)
admin.site.register(NewsArticle,NewsAdmin)
admin.site.register(Sensor,SensorAdmin)
admin.site.register(Currentreading,CurrentsensorAdmin)
admin.site.register(Job)



