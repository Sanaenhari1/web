from django.contrib.auth.models import AbstractUser
from django.db import models


class Category(models.Model):
        name = models.CharField(max_length=50, unique=True, verbose_name="Nom de la catégorie")

        def __str__(self):
            return self.name


class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True, verbose_name="Numéro de téléphone")
    gender = models.CharField(
        max_length=10,
        choices=[('male', 'Homme'), ('female', 'Femme'), ('other', 'Autre')],
        blank=True,
        null=True,
        verbose_name="Sexe"
    )
    cin = models.CharField(max_length=20, blank=True, null=True, verbose_name="Numéro CIN")
    role = models.CharField(
        max_length=20,
        choices=[('visitor', 'Visiteur'), ('service_provider', 'Fournisseur de service')],
        default='visitor',
        verbose_name="Rôle"
    )

    def __str__(self):
        return self.username

    from django.db import models
    from .models import CustomUser  # Importez votre modèle utilisateur personnalisé



    class Fournisseur(CustomUser):
        category = models.ForeignKey(
            Category,
            on_delete=models.SET_NULL,
            null=True,
            blank=True,
            verbose_name="Catégorie"
        )

        class Meta:
            verbose_name = "Fournisseur"
            verbose_name_plural = "Fournisseurs"

        def __str__(self):
            return f"{self.username} - {self.category}"