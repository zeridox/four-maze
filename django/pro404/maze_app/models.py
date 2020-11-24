from __future__ import unicode_literals
from django.db import models
import bcrypt
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class UserManager(models.Manager):
    def validator(self,postData):
        errors={}
        email_confirm = EMAIL_REGEX
        if len(postData['email'])<1:
            errors['email'] = 'Please enter your email'
        elif not email_confirm.match(postData['email']):
            errors['email'] = 'Email must be valid'
        
        post_email = self.filter(email=postData['email'])
        if len(post_email)>0:
            errors['email'] = "This email already is in use"
        
        post_user = self.filter(user_name=postData['user_name'])
        if len(post_user)>0:
            errors['user_name'] = "This user name is unavailable"
        
        
        if len(postData['user_name']) < 2:
            errors['user_name'] = "User name must be at least 2 characters"
        
        if len(postData['first_name']) < 2:
            errors['first_name'] = "First name must be at least 2 characters"
                
        if len(postData['password']) < 8:
            errors['password'] = "Password must be at least 8 characters"
        
        if postData['password'] != postData['con-password']:
            errors['password'] = "These passwords don't match"
        return errors 

    def log_validator(self, postData):
        errors={}
        email_confirm = EMAIL_REGEX
        if len(postData['email'])<1:
            errors['email'] = 'Please enter your email address'
        elif not email_confirm.match(postData['email']):
            errors['email'] = 'Email must be valid'
        if len(postData['password']) < 8:
            errors['password'] = "Password must be at least 8 characters"
        post_email = self.filter(email=postData['email'])
        if len(post_email)== 0:
            errors['email'] = "Email/Password does not match"
        elif not bcrypt.checkpw(postData['password'].encode(), post_email[0].password.encode()):
            errors['email'] = "Email/Password does not match"
        return errors

    def register(self, form):
        month = form['month']
        day = int(form['date'])
        year = int(form['year'])
        age = 2020 - year

        if month == "January":
            sign1= "Capricorn"
            sign2= "Aquarius"
            if day < 21:
                zodiac = sign1
            else:
                zodiac = sign2
        if month == "February":
            sign3= "Aquarius"
            sign4= "Pisces"
            if day < 21:
                zodiac = sign3
            else:
                zodiac = sign4
        if month == "March":
            sign5= "Pisces"
            sign6= "Aries"
            if day <21:
                zodiac = sign5
            else:
                zodiac = sign6
        if month == "April":
            sign7= "Aries"
            sign8= "Taurus"
            if day <21:
                zodiac = sign7
            else:
                zodiac = sign8
        if month == "May":
            sign9= "Taurus"
            sign10= "Gemini"
            if day <21:
                zodiac = sign9
            else:
                zodiac = sign10
        if month == "June":
            sign23= "Gemini"
            sign24= "Cancer"
            if day <21:
                zodiac = sign23
            else:
                zodiac = sign24
        if month == "July":
            sign11= "Cancer"
            sign12= "Leo"
            if day <21:
                zodiac = sign11
            else:
                zodiac = sign12
        if month == "August":
            sign13= "Leo"
            sign14= "Virgo"
            if day <21:
                zodiac = sign13
            else:
                zodiac = sign14
        if month == "September":
            sign15= "Virgo"
            sign16= "Libra"
            if day <21:
                zodiac = sign15
            else:
                zodiac = sign16
        if month == "October":
            sign17= "Libra"
            sign18= "Scorpio"
            if day <21:
                zodiac = sign17
            else:
                zodiac = sign18
        if month == "November":
            sign19= "Scorpio"
            sign20= "Saggitarius"
            if day <21:
                zodiac = sign19
            else:
                zodiac = sign20
        if month == "December":
            sign21= "Saggitarius"
            sign22= "Capricorn"
            if day <21:
                zodiac = sign21
            else:
                zodiac = sign22

        # pw = bcrypt.hashpw(form['password'].encode(), bcrypt.gensalt()).decode()
        
        return self.create(
            first_name = form['first_name'],
            user_name = form['user_name'],
            password = form['password'],
            asp = form['asp'],
            change = form['change'],
            month = form['month'],
            date = form['date'],
            year = form['year'],
            color = form['color'],
            zodiac = zodiac,
            age = age,
            
        )

class User(models.Model):
    user_name = models.CharField(max_length=255,null=True)
    first_name = models.CharField(max_length=255,null=True)
    email = models.CharField(max_length=255,null=True)
    password = models.CharField(max_length=255,null=True)
    color = models.CharField(max_length=255,null=True)
    month = models.CharField(max_length=45,null=True)
    date = models.IntegerField(null=True)
    year = models.IntegerField(null=True)
    age = models.IntegerField(null=True)
    asp = models.CharField(max_length=45,null=True)
    change = models.CharField(max_length=45,null=True)
    zodiac = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()