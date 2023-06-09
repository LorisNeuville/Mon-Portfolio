// Récupération du formulaire
const contactForm = document.querySelector('.contact__form');

// Écouteur d'événement pour la soumission du formulaire
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs des champs
    const nameInput = document.querySelector('.contact__input[name="nom"]');
    const emailInput = document.querySelector('.contact__input[name="email"]');
    const messageInput = document.querySelector('.contact__input[name="message"]');

    // Validation des champs (vous pouvez ajouter d'autres validations si nécessaire)
    if (nameInput.value.trim() === '') {
        alert('Veuillez saisir votre nom.');
        return;
    }

    if (emailInput.value.trim() === '') {
        alert('Veuillez saisir votre email.');
        return;
    }

    if (messageInput.value.trim() === '') {
        alert('Veuillez saisir votre message.');
        return;
    }

    // Envoi du formulaire (vous devez implémenter cette partie côté serveur)
    // Vous pouvez utiliser la fonction fetch() pour envoyer les données à un script de traitement côté serveur
    // Par exemple :
    fetch('url_de_votre_script_de_traitement', {
        method: 'POST',
        body: new FormData(contactForm)
    })
        .then(response => {
            if (response.ok) {
                alert('Votre message a été envoyé avec succès.');
                contactForm.reset(); // Réinitialise le formulaire après l'envoi
            } else {
                alert('Une erreur est survenue. Veuillez réessayer.');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        });
});
