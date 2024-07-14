from .models import Todos
from .serializers import  TodosSerializer
from rest_framework.generics import ListAPIView

# Create your views here.
class TodosList(ListAPIView):
    queryset = Todos.objects.all()
    serializer_class = TodosSerializer