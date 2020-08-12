from django.urls import path
from .views import ClientView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/clients', ClientView, 'clients')

urlpatterns = router.urls
