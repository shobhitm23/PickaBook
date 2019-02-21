from django.urls import path

from .views import (
    BookReviewCreateView,
    BookReviewListView
)

urlpatterns = [
    path('<fk>', BookReviewListView.as_view(), name="reviewlist"),
    path('create/', BookReviewCreateView.as_view())
]