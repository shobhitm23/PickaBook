from django.db import models

# Create your models here.

class Book(models.Model):
    # 1. title of the book
    title = models.CharField(max_length=200)
    # 2. image
    image = models.ImageField(null=True, blank=True)
    # 3. synopsis/blurb
    synopsis = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title