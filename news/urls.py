from django.urls import path
from . import views

app_name = 'news'

urlpatterns = [
    path('', views.home, name='home'),  
    path('news_list/', views.news_list, name='news_list'),
]
