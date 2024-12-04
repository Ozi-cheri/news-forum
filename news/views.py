from django.shortcuts import render
from django.core.paginator import Paginator
from .models import Post 
# Create your views here.     
 
def news_list(request):

    news_items = Post.objects.all().order_by('-created_at')
    paginator = Paginator(news_items, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request, 'news/news_list.html', {
        'news_items': page_obj.object_list,
        'has_next_page': page_obj.has_next(),
        'current_page': page_obj.number,
    })