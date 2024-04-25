// Lorsque le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', function () {

    // Sélectionnez le formulaire
    var contactForm = document.getElementById('contact-form');
    
    // Fonction à exécuter lors de la soumission du formulaire
    contactForm.onsubmit = function(event) {
        // Empêcher le formulaire de soumettre normalement
        event.preventDefault();

        // Création d'un objet FormData à partir du formulaire
        var formData = new FormData(contactForm);

        // Affichez les valeurs du formulaire dans la console pour débogage
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ': ' + pair[1]);
        }

        // Ici, vous pouvez ajouter le code pour envoyer les données à un serveur
        // Par exemple, en utilisant fetch() ou XMLHttpRequest
        // ...
    };

});
// ...
// À l'intérieur de la fonction onsubmit, après avoir créé `formData` :

fetch('chemin/vers/votre/serveur', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    console.log(data); // Réponse du serveur
    // Afficher un message de réussite ou traiter la réponse comme nécessaire
})
.catch(error => {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
});
window.addEventListener('scroll', function() {
    var image = document.getElementById('dynamicImage');
    var scrollValue = window.scrollY;
    var windowHeight = window.innerHeight;

    // Ajustez "100" pour changer à quelle distance de défilement l'effet est activé
    if (scrollValue > windowHeight - 100) {
        image.style.opacity = 0;
        image.style.transform = 'translateY(50px)'; // L'image se déplace vers le bas
    } else {
        image.style.opacity = 1;
        image.style.transform = 'translateY(0px)'; // L'image retourne à sa position initiale
    }
});

  
 

