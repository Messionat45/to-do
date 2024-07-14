from django.contrib import admin
from .models import  Todos
# Register your models here.

@admin.register(Todos)
class TodosAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'date','completed']