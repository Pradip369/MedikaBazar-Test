from rest_framework.serializers import ModelSerializer
from .models import Product
from django_elasticsearch_dsl_drf.serializers import DocumentSerializer
from .documents import ProductDocument


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class ProductSearchSerializer(DocumentSerializer):
    class Meta:
        document = ProductDocument
        fields = ['id','product_name','price','quantity']