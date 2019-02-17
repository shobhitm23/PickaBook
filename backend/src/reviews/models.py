from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
import datetime
# Create your models here.
 
class BookReview(models.Model):
    prof = models.ForeignKey('users.Profile', on_delete=models.CASCADE)
    book = models.ForeignKey('books.Book', on_delete=models.CASCADE)
    
    title = models.CharField(max_length=120, blank=False)
    content = models.TextField(max_length=500, blank=False)
    rating = models.FloatField(default=0.0)


    creation_date= models.DateField(default=datetime.date.today)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

    def __str__(self):
        return self.title    
