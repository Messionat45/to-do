from django.urls import path
from api import views #done to use views

urlpatterns = [
    path('todos/', views.TodosList.as_view()),
    path('todos/create/', views.TodosCreate.as_view(), name='todos-create'),
    path('todos/<int:pk>/', views.TodosDelete.as_view(), name='todos-delete'),
]