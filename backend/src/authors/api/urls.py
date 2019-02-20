from django.urls import path, re_path, include

from .views import (
    AuthorDetailView,
    AuthorSearchView
    #AuthorListView
)

urlpatterns = [
    #path('', AuthorListView.as_view()),
    re_path(r'^view/(?P<name>[\w\s]+)$', AuthorSearchView.as_view()),
    path('<pk>', AuthorDetailView.as_view())
]
