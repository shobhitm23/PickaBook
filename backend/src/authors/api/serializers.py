from rest_framework import serializers
from authors.models import Author

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('name', 'birthdate','review_count','bio', 'previousworks','review','genre', 'numFollowers')
