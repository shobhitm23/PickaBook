from rest_framework import serializers
from users.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile 
        fields = ('first_name', 'last_name', 'review_count', 'creation_date', 'bio', 'genre')

class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('first_name', 'last_name', 'bio', 'genre')
        read_only_fields = ['user', 'review_count', 'creation_date']