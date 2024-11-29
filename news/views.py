from django.shortcuts import render

# Create your views here.     

def news_list(request):

    news_items = [
        {
            'title': 'Breaking News: Django 3.2 Released!',
            'content': 'The Django team has released version 3.2, with exciting new features.',
            'published_date': '2024-11-28'
        },
        {
            'title': 'Community Event: Python Meetup',
            'content': 'Join us for a Python meetup in your city this weekend. Learn and network!',
            'published_date': '2024-11-27'
        }
    ]
    return render(request, 'news/news_list.html')
