from django.contrib.auth import admin
from django.conf.urls import url
from django.urls import path

from . import views

urlpatterns = [
    path('', views.whatsapp, name='whatsapp'),
    path('pk', views.normal, name='normal')

]