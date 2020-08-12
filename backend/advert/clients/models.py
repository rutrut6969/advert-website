from django.db import models

# Create your models here.


class Client(models.Model):
    name = models.CharField(max_length=50, db_index=True, null=True)
    email = models.EmailField(max_length=255, db_index=True, null=True)
    package = models.CharField(max_length=100, db_index=True, null=True)
    message = models.TextField(max_length=500, db_index=True, null=True)
    phone = models.CharField(max_length=100, db_index=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self
