// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navContainer = document.querySelector('.nav-container');

    // Toggle mobile menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navContainer.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 4000; // faster slide time

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Start automatic continuous sliding
    let sliderTimer = setInterval(nextSlide, slideInterval);

    // (Optional) Remove pause on hover if you want it fully continuous:
    // const hero = document.querySelector('.hero');
    // hero.addEventListener('mouseenter', () => clearInterval(sliderTimer));
    // hero.addEventListener('mouseleave', () => {
    //     sliderTimer = setInterval(nextSlide, slideInterval);
    // });

    // Set first slide as active
    slides[currentSlide].classList.add('active');
});

// Countdown Timer Script
document.addEventListener('DOMContentLoaded', () => {
    // Set countdown target (48 hours from now)
    const countDownDate = new Date().getTime() + (48 * 60 * 60 * 1000);

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(timer);
            document.querySelector('.countdown-timer').innerHTML = "Offer Expired!";
        }
    }, 1000);
});

// Update validation rules
const fields = {
    fullName: value => value.trim() !== '',
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    phone: value => /^\+8801\d{9}$/.test(value),
    address: value => value.trim() !== '',
    cardNumber: value => /^\d{16}$/.test(value.replace(/\s/g, '')),
    expDate: value => /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value),
    cvc: value => /^\d{3}$/.test(value)
};

// Update error messages
function getErrorMessage(fieldId) {
    const messages = {
        phone: 'Invalid Bangladeshi phone number (should be +8801XXXXXXXXX)',
        address: 'Shipping address is required',
        // Keep previous messages
    };
    return messages[fieldId];
}

// Phone number formatting
document.getElementById('phone').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '')
                          .replace(/^880/, '')
                          .replace(/^1/, '8801')
                          .slice(0, 11);
});