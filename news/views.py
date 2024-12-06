from django.shortcuts import render
from .models import Article 
# Create your views here.     
 
def news_list(request):
    
    articles = Article.objects.all()
    
    return render(request, 'news/news_list.html', {'articles': articles})