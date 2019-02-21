from django.test import TestCase
from .models import BookReview
from books.models import Book
from users.models import Profile
from django.db.utils import IntegrityError
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils import timezone

# Create your tests here.

class BookReviewModelTest(TestCase):

    def create_review(self):
        
        newuser = User.objects.create(username="Review test user", password="Secret")
        newProf = Profile.objects.get(user=newuser)
        newBook = Book.objects.create(title="Review test book")
        return BookReview.objects.create(prof=newProf, book=newBook, title="Reviw test title", content="Review test content")

    def test_review_creation(self):

        review_entry = self.create_review()
        self.assertTrue(isinstance(review_entry, BookReview))
        self.assertEqual(str(review_entry), review_entry.title)

    def test_review_list(self):

        review_entry = self.create_review()
        url = reverse('reviewlist', kwargs={'fk': 1})
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, 200)
        self.assertIn(review_entry.content, str(resp.content))