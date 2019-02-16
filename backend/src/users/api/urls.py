from django.urls import path

from .views import (
    ProfileDetailView,
    ProfileUpdateView
)

urlpatterns = [
    path('<user__pk>', ProfileDetailView.as_view()),
    path('update/<user__pk>', ProfileUpdateView.as_view())
]