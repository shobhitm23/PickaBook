from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.

class Book(models.Model):

    # title of the book
    title = models.CharField(max_length=200, unique=True)
    
    # author of the book
    author_name = models.CharField(max_length=100, default = '')
    
    # publication date
    publication_date = models.DateField(null=True)
    
    # genre
    genre = models.CharField(max_length=50, default = '')

    # rating
    rating = models.FloatField(default=0.0)

    # number of reviews
    number_of_reviews = models.IntegerField(default=0)

    # image
    image_url = models.CharField(max_length=200, default = '')
    
    # synopsis/blurb
    synopsis = models.TextField(null=True, blank=True)



    def __str__(self):
        return self.title