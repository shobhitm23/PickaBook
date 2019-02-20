from django.urls import path, re_path, include

from .views import (
    AuthorDetailView,
    #AuthorListView
)

urlpatterns = [
    #path('', AuthorListView.as_view()),
    re_path(r'^view/(?P<name>[\w\s]+)$', AuthorDetailView.as_view())
]
