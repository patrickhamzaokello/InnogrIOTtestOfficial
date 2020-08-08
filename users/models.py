from django.db import models
from django.contrib.auth.models import User
from PIL import Image
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    description = models.CharField(max_length=200, default='Add Profile Description')
    phone = models.CharField(max_length=20, default='Add Phone Number')
    firstSkill = models.CharField(max_length=200, default='Add First Skill')
    secondSkill = models.CharField(max_length=200, default='Add Second Skill')
    thirdSkill = models.CharField(max_length=200, default='Add Third Skill')




    def __str__(self):
        return f'{self.user.username} Profile'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            output_size = (300,300)
            img.thumbnail(output_size)
            img.save(self.image.path)

