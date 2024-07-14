from django.db import models

# Create your models here.
class Todos(models.Model):
    title=models.CharField(max_length=100)
    date=models.DateField()
    completed=models.BooleanField(default=False)
    
    def __str__(self):
        return f'{self.title}{self.date}{self.completed}'