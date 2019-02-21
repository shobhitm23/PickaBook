from django.test import TestCase
from .models import Book
from django.urls import reverse
from django.utils import timezone

# Create your tests here.

def create_book(title, author_name):
    return Book.objects.create(title = title, author_name=author_name, publication_date=timezone.now())


# Model tests for books
class BookModelTest(TestCase):

    def test_book_creation(self):

        book_entry = create_book(title="t", author_name="a")
        self.assertTrue(isinstance(book_entry, Book))
        self.assertEqual(str(book_entry), book_entry.title)


# List view tests for books
class BookListTest(TestCase):

    def test_book_list_view(self):

        b1 = create_book(title="t1", author_name="a1")
        b2 = create_book(title="t2", author_name="a2")
        url = reverse('booklist')
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, 200)

