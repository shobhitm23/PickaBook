from django.urls import path

from .views import (
    BookListView, 
    BookDetailView, 
    BookCreateView
)

urlpatterns = [
    path('booklist/', BookListView.as_view()),
    path('booklist/<pk>/', BookDetailView.as_view()),
    path('createbook/', BookCreateView.as_view())
]