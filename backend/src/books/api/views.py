from rest_framework.generics import (
    ListAPIView, 
    RetrieveAPIView,
    CreateAPIView
)
from books.models import Book
from .serializers import (
    BookSerializer,
    BookCreateSerializer
)
class BookListView(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def get_queryset(self):
        return Book.objects.all()

class BookDetailView(RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookSearchView(RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    lookup_field = 'title'

class BookCreateView(CreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer