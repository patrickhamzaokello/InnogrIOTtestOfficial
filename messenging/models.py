from django.db import models
from django.utils import timezone
from django.urls import reverse

# Create your models here.

class Whatsapp(models.Model):
    title = models.CharField(max_length=500)
    phone = models.CharField(max_length=20, default="add phone number")
    date_posted = models.DateTimeField(default=timezone.now)
    likes= models.IntegerField(default=0)
    dislikes= models.IntegerField(default=0)
    

    def __str__(self):
        return self.title
    class Meta:
        ordering = ['title']
    class Admin:
        pass