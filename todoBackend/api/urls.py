from django.urls import path
from api import views #done to use views

urlpatterns = [
    path('todos/', views.TodosList.as_view())
]