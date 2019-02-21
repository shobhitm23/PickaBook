from django.test import TestCase
from .models import (
    Question,
    Answer
)
from django.db.utils import IntegrityError
from django.contrib.auth.models import User
from django.urls import reverse
from users.models import Profile
from books.models import Book
# Create your tests here.

class QATest(TestCase):
    def create_question(self, username="user1", password="secret"):
        newuser = User.objects.create(username=username, password=password)
        newProf = Profile.objects.get(user=newuser)
        newBook = Book.objects.create(title="bookexample")
        quesn = Question.objects.create(profile=newProf, book=newBook, question="test??")
        return quesn, newProf, newBook

    def create_answer(self):
        quesn, newProf, newBook = self.create_question()
        answer = Answer.objects.create(profile=newProf, question=quesn, book=newBook, answer="test." )
        return answer, quesn

    def test_question_creation(self):
        a, _, __ = self.create_question()
        self.assertTrue(isinstance(a, Question))
        
    def test_answer_creation(self):
        answer, question = self.create_answer()
        self.assertTrue(isinstance(answer, Answer))

    def test_question_answer_key(self):
        a, q = self.create_answer()
        self.assertTrue((a.question.pk == q.pk))

    def test_question_list_view(self):
        q, _, __ = self.create_question()
        url = reverse('questionlist', kwargs={'fk': 1})
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, 200)
        self.assertIn(q.question, str(resp.content))

    def test_answer_list_view(self):
        a, q = self.create_answer()
        url = reverse('answerlist', kwargs={'fk': 1})
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, 200)
        self.assertIn(a.answer, str(resp.content))
    
    def test_question_answer_list_view(self):
        a, q = self.create_answer()
        url = reverse('questionlist', kwargs={'fk': 1})
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, 200)
        self.assertIn(q.question, str(resp.content))
        self.assertIn(a.answer, str(resp.content))
    