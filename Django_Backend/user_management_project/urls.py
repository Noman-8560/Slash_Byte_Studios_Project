# user_management_project/urls.py
from django.contrib import admin
from django.urls import path, include  # Make sure to include 'path' in your imports
from rest_framework import routers

router = routers.DefaultRouter()
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('user_management_app.urls')),  # Include your app's URLs
]
