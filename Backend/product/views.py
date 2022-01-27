from rest_framework.viewsets import ModelViewSet
from .models import Product
from .serializers import ProductSerializer,ProductSearchSerializer
from .documents import ProductDocument

from django_elasticsearch_dsl_drf.filter_backends import SearchFilterBackend
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all().order_by('-id')
    serializer_class = ProductSerializer

class ProductSearchViewset(DocumentViewSet):
    document = ProductDocument
    serializer_class = ProductSearchSerializer
    filter_backends = [SearchFilterBackend]
    search_fields = ('product_name',)