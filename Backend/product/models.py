from django.db import models

class Product(models.Model):
    product_name = models.CharField(max_length=200,unique=True,help_text="Enter unique product name")
    price = models.PositiveIntegerField()
    quantity = models.PositiveIntegerField(default = 0)

    def __str__(self):
        return '%s' %(self.product_name)
