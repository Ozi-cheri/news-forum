from django.shortcuts import render
from .models import Post 

# Create your views here.     

def news_list(request):

    news_items = Post.objects.all().order_by('-created_at')
    return render(request, 'news/news_list.html',{'news_items': news_items})
