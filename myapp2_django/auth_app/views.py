from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from .form import CustomUserCreationForm


def inscription(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # Connecte automatiquement l'utilisateur
            messages.success(request, "Inscription réussie!")
            return redirect('connexion')  # Redirection après succès

        else:
            print(form.errors)  # Affiche les erreurs dans la console pour débogage
            messages.error(request, "Veuillez corriger les erreurs ci-dessous.")
            return render(request, 'inscription.html', {'form': form})
    else:
        form = CustomUserCreationForm()
    return render(request, 'inscription.html', {'form': form})



def connexion(request):
    if request.method == "POST":
        # Récupérer les données du formulaire
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Authentifier l'utilisateur
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)

            # Vérifier le rôle de l'utilisateur
            if user.role == 'visitor':  # Accéder directement à user.role
                return redirect('visiteur')  # Redirection vers /visiteur
            elif user.role == 'service_provider':
                return redirect('fournisseur_service')  # Redirection vers /fournisseur_service
        else:
            # Afficher un message d'erreur si l'authentification échoue
            messages.error(request, "Nom d'utilisateur ou mot de passe incorrect.")
            return render(request, 'connexion.html')

    # Afficher le formulaire de connexion pour les requêtes GET
    return render(request, 'connexion.html')

def acceuil(request):
    return render(request, 'acceuil.html')

def visiteur(request):
    return render(request, 'visiteur.html')

def fournisseur_service(request):
    return render(request, 'fournisseur.html')





from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password
from .models import Fournisseur, Category

def enregistrer_fournisseur(request):
    if request.method == "POST":
        # Récupérer les données du formulaire
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        category_id = request.POST.get('category')

        # Vérifier que tous les champs sont remplis
        if not (username and email and password and category_id):
            return render(request, 'fournisseur_form.html', {'error': "Tous les champs sont requis."})

        # Vérifier si l'utilisateur existe déjà
        if Fournisseur.objects.filter(username=username).exists():
            return render(request, 'fournisseur_form.html', {'error': "Ce nom d'utilisateur existe déjà."})

        # Créer un nouvel utilisateur fournisseur
        category = Category.objects.get(id=category_id)
        fournisseur = Fournisseur.objects.create(
            username=username,
            email=email,
            password=make_password(password),  # Hasher le mot de passe
            category=category
        )
        fournisseur.save()

        # Rediriger vers une page de confirmation
        return redirect('confirmation')  # Remplacez par la vue de confirmation

    # Afficher les catégories dans le formulaire
    categories = Category.objects.all()
    return render(request, 'fournisseur_form.html', {'categories': categories})
