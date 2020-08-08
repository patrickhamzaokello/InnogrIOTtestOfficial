from django.shortcuts import render,redirect, get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from innogrApp.models import Post,NewsArticle, Comment, Preference
from django.contrib.auth.models import User

import sys
from django.db.models import Count, Max
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from users.forms import UserRegistrationForm,UserUpdateForm,ProfileUpdateForm

from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
import requests

news_url = "https://news.google.com/rss?hl=en-UG&gl=UG&ceid=UG:en"
# news_url = "file:///home/pkasemer/Desktop/offlinedata/googlenewsress"


# Create your views here.
def innogrhomepage(request):
    posts = Post.objects.order_by('-likes')[0:6]
    news = NewsArticle.objects.all()[0:15]
    
    
    all_users = []
    data_counter = Post.objects.values('author')\
        .annotate(author_count=Count('author'))\
        .order_by('-author_count')\
        .first()
        
    print(data_counter)
    usergot = User.objects.filter(pk=data_counter['author']).first()
    all_users.append(usergot)
    
    # res = requests.get(news_url)
    # xml_page = res.content
    # soup_page = BeautifulSoup(xml_page, "xml")
    # news_list = soup_page.findAll("item")

    # allnews_list = []
    # for news in news_list:
    #     newstitle = news.title.text
    #     newslink = news.link.text
    #     newspubDate = news.pubDate.text

    #     allnews_list.append((newstitle, newslink, newspubDate))
        
    #     savenews = NewsArticle(title=newstitle, link=newslink, newsdate=newspubDate)
    #     savenews.save()
   
    context = {
        
        'all_users':all_users,
        'posts':posts,
        # 'allnews_list':allnews_list
        'allnews_list':news
        
    }
    
    return render(request,'homepage/home.html',context)


def innogrlearn(request):
    
    return render(request, 'homepage/learning.html')

def landingpage(request):
    posts = Post.objects.order_by('-likes')[0:6]
    
    context = {
        'posts':posts,
    }
     
    return render(request, 'homepage/landing.html',context)