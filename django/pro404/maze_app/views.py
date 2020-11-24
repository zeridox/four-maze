from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *

def index(request):
    return render(request, 'index.html')

def enter(request):
    if 'user_id' not in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user':user,
    }
    return render(request,'enter.html', context)

def realm(request):
    if 'user_id' not in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user':user,
    }
    return render(request,'realm.html', context)

def create_name(request):
    confirm = User.objects.filter(user_name=request.POST['user_name'])

    if confirm:
        messages.error(request, "That alias is already in use")
        return redirect('/')

    # new_user = User.objects.create(
    #     user_name = request.POST['user_name'],
    #     first_name = request.POST['first_name'],
    #     month = request.POST['month'],
    #     date = request.POST['date'],
    #     year = request.POST['year'],
    #     asp = request.POST['asp'],
    #     change = request.POST['change'],
    #     color = request.POST['color'],
    #     password = request.POST['password'],
        
    # )
    new_user = User.objects.register(request.POST)
    request.session['user_id'] = new_user.id
    messages.success(request, "Welcome to the maze!")
    return redirect('/enter')

