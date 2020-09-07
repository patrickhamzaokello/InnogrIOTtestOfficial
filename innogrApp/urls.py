from django.contrib.auth import admin
from django.conf.urls import url
from django.urls import path
from .views import (
    PostDetailView,
    PostCreateView,
    PostUpdateView,
    PostDeleteView,
    UserPostListView,
    UserProfileListView,
    postpreference,
    NewsFeedPostListView,
)

from . import views

urlpatterns = [
    path('', views.dashboard, name='blog-home'),
    path('index.html', views.dashboard, name='home'),
    path('post/<int:pk>', PostDetailView.as_view(), name='post-detail'),
    path('post/new', PostCreateView.as_view(), name='post-create'),
    path('post/<int:pk>/update', PostUpdateView.as_view(), name='post-update'),
    path('post/<int:pk>/delete', PostDeleteView.as_view(), name='post-delete'),
    path('user/<str:username>', UserPostListView.as_view(), name='user-posts'),
    path('profile/<str:user>', UserProfileListView.as_view(), name='profile-posts'),
    path('posts/<int:postid>/preference/<int:userpreference>', views.postpreference, name='postpreference'),
    path('newsFeed', NewsFeedPostListView.as_view(), name='news-feed'),
    
    




    path('myDevices', views.mydevices, name='MyDevices'),
    path('Profile/Settings', views.Accountsettings, name='Accountsettings'),
    path('Resources/Support', views.Resources, name='Resources'),

]