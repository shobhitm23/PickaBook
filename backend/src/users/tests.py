from django.test import TestCase
from django.contrib.auth.models import User
from .models import Profile
from django.db.utils import IntegrityError
# Create your tests here.

class ProfileTest(TestCase):
    def create_profile(self, username="user1", password="secret"):
        newuser = User.objects.create(username=username, password=password)
        newProf = Profile.objects.get(user=newuser)
        return newProf

    def test_profile_creation(self):
        a = self.create_profile()
        self.assertTrue(isinstance(a, Profile))

    def test_profile_onetoone(self):
        a = self.create_profile()
        userid = a.user
        #OnetoOne Test
        self.assertTrue((User.objects.filter(pk=userid).count() == 1))

    def test_unique_email(self):
        user1 = User.objects.create(username='user2', password='secret', email='test@gmail.com')
        with self.assertRaises(IntegrityError):
            user2 = User.objects.create(username='user3', password='secret', email='test@gmail.com')
