from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id','product_name','price','quantity']
    search_fields = ['product_name']
    list_per_page = 15
    list_filter = ['price','quantity']
    list_display_links = list_display