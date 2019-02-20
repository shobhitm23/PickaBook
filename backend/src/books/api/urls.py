from django.urls import path, re_path

from .views import (
    BookListView, 
    BookDetailView, 
    BookCreateView,
    BookSearchView
)

urlpatterns = [
    path('booklist/', BookListView.as_view(), name='booklist'),
    path('booklist/<pk>/', BookDetailView.as_view()),
    path('createbook/', BookCreateView.as_view()),
    re_path(r'^view/(?P<title>[\w\s]+)$', BookSearchView.as_view())
]