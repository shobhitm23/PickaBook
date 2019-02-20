# from django.test import TestCase
# from .models import BookReview
# from django.urls import reverse
# from django.utils import timezone

# # Create your tests here.

# def create_review(title, content):
#     create(user = User.objects.create(), )
#     return BookReview.objects.create(profile= profObj, title = title, content = content, creation_date = timezone.now())

# # Model tests for reviews
# class BookReviewModelTest(TestCase):

#     def test_reviewCreation(self):

#         review_entry = create_review(title="Test review", content="Content of the test review")
#         self.assertTrue(isinstance(review_entry, BookReview))
#         self.assertEqual(str(review_entry), review_entry.title)

# # List view tests for reviews
# class BookReviewListTest(self):

#     def test_bookReviewListView(self):