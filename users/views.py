from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from innogrApp.models import Post
from django.contrib.auth.decorators import login_required
from .forms import UserRegistrationForm,UserUpdateForm,ProfileUpdateForm
# Create your views here.

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Your Account has been created! You are now able to login')
            return redirect('login')
    else:
        form = UserRegistrationForm()
    return render(request, 'users/register.html',{'form':form})

def profile(request):
    return render(request, 'users/profile.html')


@login_required
def SearchView(request):
    if request.method == 'POST':
        inputvalue = request.POST.get('search')
        print(inputvalue)
        results = User.objects.filter(username__contains=inputvalue)
        posts = Post.objects.filter(title__contains=inputvalue).order_by('-date_posted')
        context = {
            'results':results,
            'posts': posts
        }
        return render(request, 'users/search_result.html', context)