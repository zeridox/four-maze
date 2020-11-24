from django.urls import path
from . import views

urlpatterns=[
    path('', views.index),
    path('create_name', views.create_name),
    path('enter', views.enter),
    path('realm', views.realm),
]