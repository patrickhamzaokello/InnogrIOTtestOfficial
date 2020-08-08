from django.contrib import admin
from .models import Profile
# Register your models here.

class ProfileAdmin(admin.ModelAdmin):
    list_filter = ['firstSkill','secondSkill','thirdSkill']
    search_fields = ['user','description']
    list_display = ('user','image','description','phone','firstSkill','secondSkill','thirdSkill')

admin.site.register(Profile,ProfileAdmin)