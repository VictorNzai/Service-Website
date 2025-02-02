document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button click handlers
    const getStartedBtn = document.querySelector('.get-started');
    const contactUsBtn = document.querySelector('.contact-us');

    getStartedBtn.addEventListener('click', () => {
        document.querySelector('#services').scrollIntoView({
            behavior: 'smooth'
        });
    });

    contactUsBtn.addEventListener('click', () => {
        // You can replace this with your contact form logic
        window.location.href = 'mailto:contact@techcreate.com';
    });

    // Add animation to service cards on scroll
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
});