// Fonction pour la recherche de produits (simulée ici)
document
  .querySelector('.search-bar button')
  .addEventListener('click', function () {
    const searchTerm = document.querySelector('.search-bar input').value;
    if (searchTerm) {
      alert('Vous avez recherché: ' + searchTerm);
    } else {
      alert('Veuillez entrer un terme de recherche.');
    }
  });

// Fonction pour changer les images dans la section hero
const heroImages = document.querySelectorAll('.hero-images img');
let currentImageIndex = 0;

function changeHeroImage() {
  // Masquer l'image actuelle
  heroImages[currentImageIndex].style.display = 'none';

  // Passer à l'image suivante
  currentImageIndex = (currentImageIndex + 1) % heroImages.length;

  // Afficher la nouvelle image
  heroImages[currentImageIndex].style.display = 'block';
}

// Initialiser la première image
heroImages.forEach((image, index) => {
  if (index !== currentImageIndex) {
    image.style.display = 'none';
  }
});

// Changer d'image toutes les 5 secondes
setInterval(changeHeroImage, 5000);

// Fonction pour la navigation dans les catégories (ajout de fonctionnalités au clic)
const categoryElements = document.querySelectorAll('.category');

categoryElements.forEach((category) => {
  category.addEventListener('click', function () {
    alert(
      'Vous avez cliqué sur la catégorie: ' +
        category.querySelector('p').innerText,
    );
  });
});
