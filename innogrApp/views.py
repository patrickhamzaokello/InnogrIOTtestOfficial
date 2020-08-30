from django.shortcuts import render,redirect, get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from .models import Post,NewsArticle, Comment, Preference,Sensor,Currentreading,Weather
from django.contrib.auth.models import User
from django.views.generic import (
    ListView, 
    DetailView,
    CreateView,
    UpdateView,
    DeleteView
)
import sys
from django.db.models import Count, Max
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from users.forms import UserRegistrationForm,UserUpdateForm,ProfileUpdateForm

from messenging.models import Whatsapp


import requests
import json


@login_required
def dashboard(request):
    # messages.success(request, f'Welcome Back')
    
    posts = Post.objects.order_by('-likes')[0:8]
    news = NewsArticle.objects.order_by('-newsdate')
    # news = NewsArticle.objects.filter(title__contains='Daily')
    
    #sensor value from database        
    sensordataLI = Sensor.objects.all().filter(sensorname='InnogrLI').values('sensorvalue')[4:11]
    sensordataTC = Sensor.objects.all().filter(sensorname='InnogrTC').values('sensorvalue')
    sensordataWM = Sensor.objects.all().filter(sensorname='InnogrWM').values('sensorvalue')[4:11]
    sensordataHUM = Sensor.objects.all().filter(sensorname='InnogrHUM').values('sensorvalue')
    sensordataWL = Sensor.objects.all().filter(sensorname='InnogrWL').values('sensorvalue')[4:11]
    
    pastsensordataWL = Sensor.objects.all().filter(sensorname='InnogrWL').values('sensorvalue')[13:20]
    pastsensordataWM = Sensor.objects.all().filter(sensorname='InnogrWM').values('sensorvalue')[13:20]
    
    sensorCurrent = Currentreading.objects.order_by('-last_update')
      

    #user
    all_users = []
    data_counter = Post.objects.exclude(author=request.user).values('author')\
        .annotate(author_count=Count('author'))\
        .order_by('-author_count')\
        .first()
        
    print(data_counter)
    usergot = User.objects.filter(pk=data_counter['author']).first()
    all_users.append(usergot)
    
    
    # NewsArticle.objects.all().delete()
    
   
    context = {
        
        'all_users':all_users,
        'posts':posts,
        'allnews_list':news,
        'sensordata':sensordataLI,
        'sensordataTc':sensordataTC,
        'sensordataHUM':sensordataHUM,
        'sensordataWM':sensordataWM,
        'sensordataWL':sensordataWL,
        'pastsensordataWL':pastsensordataWL,
        'pastsensordataWM':pastsensordataWM,
        'sensorCurrent':sensorCurrent        
        
    }
    
    return render(request,'innogrApp/index.html',context)

class UserPostListView(LoginRequiredMixin, ListView):
    model = Post
    template_name = 'innogrApp/user_posts.html' #<app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    paginate_by = 4

    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)

        all_users = []
        data_counter = Post.objects.exclude(author=self.request.user).values('author')\
            .annotate(author_count=Count('author'))\
            .order_by('-author_count')[0:6]

        for aux in data_counter:
            all_users.append(User.objects.filter(pk=aux['author']).first())
        # if Preference.objects.get(user = self.request.user):
        #     data['preference'] = True
        # else:
        #     data['preference'] = False
        data['preference'] = Preference.objects.all()
        # print(Preference.objects.get(user= self.request.user))
        data['all_users'] = all_users
        print(all_users, file=sys.stderr)
        return data

    def get_queryset(self):
        user = get_object_or_404(User,username=self.kwargs.get('username'))
        return Post.objects.filter(author=user).order_by('-date_posted')

class UserProfileListView(LoginRequiredMixin, ListView):
    model = Post
    template_name = 'innogrApp/profile_posts.html' #<app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    paginate_by = 4

    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)

        all_users = []
        data_counter = Post.objects.exclude(author=self.request.user).values('author')\
            .annotate(author_count=Count('author'))\
            .order_by('-author_count')

        for aux in data_counter:
            all_users.append(User.objects.filter(pk=aux['author']).first())
        # if Preference.objects.get(user = self.request.user):
        #     data['preference'] = True
        # else:
        #     data['preference'] = False
        data['preference'] = Preference.objects.all()
        # print(Preference.objects.get(user= self.request.user))
        data['all_users'] = all_users
        print(all_users, file=sys.stderr)
        return data

    def get_queryset(self):
        user = get_object_or_404(User,username=self.kwargs.get('user'))
        return Post.objects.filter(author=user).order_by('-date_posted')


class PostDetailView(LoginRequiredMixin, DetailView):
    model = Post
    template_name = 'innogrApp/pages/post_detail.html'
   
    
    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)
        posts = Post.objects.exclude(author=self.request.user).order_by('-likes')
        data['posts'] = posts
        paginate_by = 4
        return data


class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['title','summary', 'content']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

class PostUpdateView(LoginRequiredMixin,UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['title','summary', 'content']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False

class PostDeleteView(LoginRequiredMixin,UserPassesTestMixin,DeleteView):
    model = Post
    success_url = '/'

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False

class NewsFeedPostListView(LoginRequiredMixin, ListView):
    model = Post
    template_name = 'innogrApp/pages/newsfeed.html' #<app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    ordering = ['-date_posted']
    paginate_by = 10
    
    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)

        all_users = []
        data_counter = Post.objects.exclude(author=self.request.user).values('author')\
            .annotate(author_count=Count('author'))\
            .order_by('-author_count')

        for aux in data_counter:
            all_users.append(User.objects.filter(pk=aux['author']).first())
        # if Preference.objects.get(user = self.request.user):
        #     data['preference'] = True
        # else:
        #     data['preference'] = False
        
        news = NewsArticle.objects.all()
        whatsappposts = Whatsapp.objects.order_by('-date_posted').all()
        weather = Weather.objects.all()


        
        data['preference'] = Preference.objects.all()
        # print(Preference.objects.get(user= self.request.user))
        data['all_users'] = all_users
        data['allnews_list'] = news
        data['whatsappposts'] = whatsappposts
        data['weather'] = weather


        
        print(all_users, file=sys.stderr)
        return data


@login_required
def postpreference(request, postid, userpreference):

        if request.method == "POST":
                eachpost= get_object_or_404(Post, id=postid)

                obj=''

                valueobj=''

                try:
                        obj= Preference.objects.get(user= request.user, post= eachpost)

                        valueobj= obj.value #value of userpreference


                        valueobj= int(valueobj)

                        userpreference= int(userpreference)
                
                        if valueobj != userpreference:
                                obj.delete()


                                upref= Preference()
                                upref.user= request.user

                                upref.post= eachpost

                                upref.value= userpreference


                                if userpreference == 1 and valueobj != 1:
                                        eachpost.likes += 1
                                        eachpost.dislikes -=1
                                elif userpreference == 2 and valueobj != 2:
                                        eachpost.dislikes += 1
                                        eachpost.likes -= 1
                                

                                upref.save()

                                eachpost.save()
                        
                        
                                context= {'eachpost': eachpost,
                                  'postid': postid}

                                return redirect('post-detail',pk=postid)

                        elif valueobj == userpreference:
                                obj.delete()
                        
                                if userpreference == 1:
                                        eachpost.likes -= 1
                                elif userpreference == 2:
                                        eachpost.dislikes -= 1

                                eachpost.save()

                                context= {'eachpost': eachpost,
                                  'postid': postid}

                                return redirect('post-detail',pk=postid)
                                
                        
        
                
                except Preference.DoesNotExist:
                        upref= Preference()

                        upref.user= request.user

                        upref.post= eachpost

                        upref.value= userpreference

                        userpreference= int(userpreference)

                        if userpreference == 1:
                                eachpost.likes += 1
                        elif userpreference == 2:
                                eachpost.dislikes +=1

                        upref.save()

                        eachpost.save()                            


                        context= {'eachpost': eachpost,
                          'postid': postid}

                        return redirect('post-detail',pk=postid)


        else:
                eachpost= get_object_or_404(Post, id=postid)
                context= {'eachpost': eachpost,
                          'postid': postid}

                return redirect('post-detail',pk=postid)
            
            
            

@login_required
def mydevices(request):
    
    sensordataLI = Sensor.objects.all().filter(sensorname='InnogrLI').values('sensorvalue')
    sensordataTC = Sensor.objects.all().filter(sensorname='InnogrTC').values('sensorvalue')
    sensordataWM = Sensor.objects.all().filter(sensorname='InnogrWM').values('sensorvalue')
    sensordataHUM = Sensor.objects.all().filter(sensorname='InnogrHUM').values('sensorvalue')
    sensordataWL = Sensor.objects.all().filter(sensorname='InnogrWL').values('sensorvalue')
    
    

    context = {
        
        'sensordata':sensordataLI,
        'sensordataTc':sensordataTC,
        'sensordataHUM':sensordataHUM,
        'sensordataWM':sensordataWM,
        'sensordataWL':sensordataWL,
   
        
    }
    
    
    return render(request,'innogrApp/pages/mydevices.html',context)


@login_required
def Accountsettings(request):
    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST,instance=request.user)
        p_form = ProfileUpdateForm(request.POST,request.FILES, instance=request.user.profile)

        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request, f'Your Account has been updated')
            return redirect('profile-posts', user= request.user.username)
    
    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)

    context = {
        'u_form':u_form,
        'p_form': p_form
    }

    return render(request, 'innogrApp/pages/profile/settings.html', context)



@login_required
def Resources(request):
    return render(request, 'innogrApp/pages/government/supportcenters.html')

