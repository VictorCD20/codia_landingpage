// Codia Software & Desarrollo de Soluciones - Animation System

document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Logo Animation
    const heroTimeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1500
    });

    heroTimeline
    .add({
        targets: '#main-logo-symbol',
        scale: [0.5, 1.5],
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 2000
    })
    .add({
        targets: '.tech-dot',
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 800
    }, '-=1000');

    // 2. Floating Animation for Dots
    anime({
        targets: '.tech-dot',
        translateY: [-10, 10],
        translateX: [-5, 5],
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        delay: anime.stagger(300)
    });

    // 3. Network Background Subtle Pulse
    anime({
        targets: '#network-svg',
        opacity: [0.1, 0.3],
        scale: [0.95, 1.05],
        duration: 4000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
    });

    // 4. Scroll Reveal Animations for Services
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // Animate child elements or the card itself
                anime({
                    targets: target,
                    translateY: [30, 0],
                    opacity: [0, 1],
                    easing: 'easeOutQuad',
                    duration: 800
                });
                
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    // Apply observer to service cards and section headers
    document.querySelectorAll('#servicios .grid > div, #portafolio .grid > div, #proceso .flex').forEach(el => {
        el.style.opacity = '0'; // Initial state
        observer.observe(el);
    });

    // 5. Header Staggered Entrance
    anime({
        targets: 'nav div > *',
        translateY: [-20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
        duration: 1000
    });
});