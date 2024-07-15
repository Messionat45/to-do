from .models import Todos
from .serializers import  TodosSerializer
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

# ListAPIView, CreateAPIView, RetrieveAPIView insted of thiis u can use single generics

# Create your views here.
class TodosList(ListAPIView):
    queryset = Todos.objects.all()
    serializer_class = TodosSerializer

class TodosCreate(CreateAPIView):
    queryset = Todos.objects.all()
    serializer_class = TodosSerializer

class TodosDelete(RetrieveUpdateDestroyAPIView):
    queryset = Todos.objects.all()
    serializer_class = TodosSerializer