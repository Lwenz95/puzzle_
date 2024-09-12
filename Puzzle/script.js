document.addEventListener('DOMContentLoaded', function() {
    var jigsawElements = document.querySelectorAll('.jigsaw');
    
    jigsawElements.forEach(function(jigsaw) {
        jigsaw.addEventListener('click', function() {
            var image = this.querySelector('img');
            if (!image) {
                image = document.createElement('img');
                var imageUrl = this.getAttribute('data-image');
                image.src = imageUrl;
                // image.alt = 'Bild für ' + this.className;
                image.style.display = 'block'; // Bild anzeigen
                image.style.width = '300px'; // Bildgröße anpassen
                image.style.height = 'auto';
                this.appendChild(image);
            }
            image.classList.toggle('show'); // Toggle der Klasse für den Fade-Effekt
        });
    });
});