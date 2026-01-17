// MUSSI Contracting Limited - Script Principal Corrigé
console.log('MUSSI - Script initialisé');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé - Initialisation des composants');

    // ================ 1. MENU HAMBURGER ================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-links a');

    if (mobileMenuBtn && navLinks) {
        // Gestion du clic sur le bouton burger
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche les comportements par défaut
            e.stopPropagation(); // Arrête la propagation

            // Basculer la classe active
            navLinks.classList.toggle('active');

            // Changer l'icône
            if (navLinks.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '✕'; // Croix
            } else {
                mobileMenuBtn.innerHTML = '☰'; // Burger
            }
        });

        // Fermer le menu quand on clique sur un lien
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            });
        });

        // Fermer le menu si on clique en dehors
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    } else {
        console.error('Erreur : Bouton menu ou liens de navigation introuvables.');
    }

    // ================ 2. COPYRIGHT (ANNÉE) ================
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#currentYear');
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });

    // ================ 3. ANIMATION NAVBAR AU SCROLL ================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.5rem 0';
                navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '1rem 0';
                navbar.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.1)'; // Valeur par défaut du CSS
            }
        });
    }

    // ================ 4. FORMULAIRE DE CONTACT ================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            
            // Simulation d'envoi
            if(name && phone && email) {
                alert(`Merci ${name} ! Votre demande pour "${service}" a bien été reçue. Nous vous recontacterons au ${phone}.`);
                contactForm.reset();
            } else {
                alert('Veuillez remplir les champs obligatoires.');
            }
        });
    }
});


// Gestion des vidéos dans la galerie
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.galerie video');
    
    videos.forEach(video => {
        // Ajouter l'attribut controls pour les contrôles de lecture
        video.setAttribute('controls', true);
        
        // Ajouter un poster par défaut si non défini
        if (!video.hasAttribute('poster')) {
            video.setAttribute('poster', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23002b4d"/%3E%3Cpath d="M120,80 L180,120 L120,160 Z" fill="%2300a8cc"/%3E%3C/svg%3E');
        }
        
        // Gestion des événements de lecture
        video.addEventListener('play', function() {
            this.classList.add('playing');
            // Mettre en pause les autres vidéos
            videos.forEach(otherVideo => {
                if (otherVideo !== this && !otherVideo.paused) {
                    otherVideo.pause();
                    otherVideo.classList.remove('playing');
                }
            });
        });
        
        video.addEventListener('pause', function() {
            this.classList.remove('playing');
        });
        
        // Empêcher la lecture automatique
        video.removeAttribute('autoplay');
    });
});

// ================ 5. GESTION DU REDIMENSIONNEMENT ================
// Ferme le menu si on repasse en mode ordinateur alors que le menu est ouvert
window.addEventListener('resize', function() {
    const navLinks = document.getElementById('navLinks');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (mobileMenuBtn) {
            mobileMenuBtn.innerHTML = '☰';
        }
    }
});