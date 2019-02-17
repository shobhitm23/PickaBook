from rest_framework import permissions
from django.shortcuts import get_object_or_404


from rest_framework.generics import (
    ListAPIView,
    CreateAPIView
)

from reviews.models import BookReview
from .serializers import (
    BookReviewSerializer
)

class BookReviewCreateView(CreateAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer

class BookReviewListView(ListAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer

    def get_queryset(self):
        return BookReview.objects.filter(book=self.kwargs['fk'])
