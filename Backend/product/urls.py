from django.urls import path
from .views import *
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'product', ProductViewSet,basename = 'product-crud')
router.register(r'product_search', ProductSearchViewset,basename = 'product-search')

urlpatterns = [
    # path('product_search/',ProductSearch.as_view(),name='search')
]

urlpatterns += router.urls