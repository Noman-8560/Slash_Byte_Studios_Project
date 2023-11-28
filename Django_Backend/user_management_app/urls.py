# user_management_app/urls.py
from django.urls import path
from .views import UserList, add_user

urlpatterns = [
    path('api/users/', UserList.as_view(), name='user-list'),
    path('api/add_user/', add_user, name='add-user'),
]
