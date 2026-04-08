document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing');

    if (textElement) {
        const phrases = [
            "Desarrollador Web",
            "Frontend Developer",
            "Diseñador de Interfaces",
            "Creador de Experiencias Digitales"
];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            textElement.textContent = currentPhrase.substring(0, charIndex);

            let speed = isDeleting ? 45 : 85;

            if (!isDeleting && charIndex === currentPhrase.length) {
                speed = 1400;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                speed = 350;
            }

            setTimeout(typeEffect, speed);
        }

        typeEffect();
    }

    const elements = document.querySelectorAll('.fade-in');

    if (elements.length > 0) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observerInstance.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        elements.forEach(el => observer.observe(el));
    }
});
    const cards = document.querySelectorAll('.proyecto-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    });
});