from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Fieldset, Field, ButtonHolder, Submit
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile

class UserRegistrationForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email','first_name','last_name','password1','password2']

    # remove help text
    def __init__(self, *args, **kwargs):
        super(UserCreationForm, self).__init__(*args, **kwargs)
        for fieldname in  ['username','email','first_name','last_name', 'password1','password2']:
            self.fields[fieldname].help_text = None
       


class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username','email','first_name','last_name']

        help_texts = {
            'username':None,
            'email':None,
        }
       


class ProfileUpdateForm(forms.ModelForm):
    
    class Meta:
        model = Profile
        fields = ['phone','firstSkill','secondSkill','thirdSkill','description','image']

    helper = FormHelper()
    helper.form_class = 'form-group'
    helper.layout = Layout(
        Field('phone'),
        Field('firstSkill'),
        Field('secondSkill'),
        Field('thirdSkill'),
        Field('description'),
        Field('image'),
        ButtonHolder(
            Submit('submit', 'Save Changes', css_class='btn btn-primary mr-2')
        )
    )