from django.db import models
from authentication.models import User
# Create your models here.

class Word(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    definition = models.CharField(max_length=255)
    
    
