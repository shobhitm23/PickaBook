from rest_framework import serializers
from qanswers.models import Question, Answer

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class QuestionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'
        read_only_fields = ['creation_date', 'likes', 'dislikes']



class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'

class AnswerCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'
        read_only_fields = ['creation_date']


