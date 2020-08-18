from django.contrib import admin
from .models import Whatsapp
# Register your models here.


class WhatsappAdmin(admin.ModelAdmin):
    list_filter = ['date_posted']
    search_fields = ['title']
    list_display = ('title','phone','date_posted','likes','dislikes')
    

admin.site.register(Whatsapp,WhatsappAdmin)




