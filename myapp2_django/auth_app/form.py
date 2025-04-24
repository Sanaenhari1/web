from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True, label="Adresse e-mail")
    phone_number = forms.CharField(max_length=15, required=False, label="Numéro de téléphone")
    gender = forms.ChoiceField(
        choices=[('male', 'Homme'), ('female', 'Femme'), ('other', 'Autre')],
        required=False,
        label="Sexe"
    )
    cin = forms.CharField(max_length=20, required=False, label="Numéro CIN")
    role = forms.ChoiceField(
        choices=[('visitor', 'Visiteur'), ('service_provider', 'Fournisseur de service')],
        required=True,
        label="Rôle"
    )

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password1', 'password2', 'phone_number', 'gender', 'cin', 'role']

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user