from django.urls import path

from .views import (
    QuestionListView,
    QuestionCreateView,
    AnswerListView,
    AnswerCreateView
)

urlpatterns = [
    path('question/<fk>', QuestionListView.as_view()),
    path('question/create/', QuestionCreateView.as_view()),
    path('answer/<fk>', AnswerListView.as_view()),
    path('answer/create/', AnswerCreateView.as_view())
]