document.getElementById('submitBtn').addEventListener('click', function() {
    let color = document.getElementById('color').value;
    let passion = document.getElementById('passion').value;
    let dish = document.getElementById('dish').value;

    if (color && passion && dish) {
        const message = `Réponses:\nCouleur préférée: ${color}\nPassion: ${passion}\nPlat préféré: ${dish}`;
        const whatsappURL = `https://wa.me/8199968999?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, '_blank');
    } else {
        alert('Veuillez remplir toutes les réponses avant de soumettre.');
    }
});
