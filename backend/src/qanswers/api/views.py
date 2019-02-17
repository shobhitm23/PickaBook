from rest_framework import permissions
from django.shortcuts import get_object_or_404


from rest_framework.generics import (
    ListAPIView,
    CreateAPIView
)

from qanswers.models import (
    Question,
    Answer
)
from .serializers import (
    QuestionSerializer,
    QuestionCreateSerializer,
    AnswerSerializer,
    AnswerCreateSerializer
)

class QuestionCreateView(CreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionCreateSerializer


class AnswerCreateView(CreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerCreateSerializer


class QuestionListView(ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def get_queryset(self):
        return Question.objects.filter(book=self.kwargs['fk'])

class AnswerListView(ListAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    def get_queryset(self):
        return Answer.objects.filter(question=self.kwargs['fk'])