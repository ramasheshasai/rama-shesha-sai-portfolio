
// Typed.js initialization
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
let topButton = document.querySelector('.top');
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

topButton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Contact form validation
const form = document.querySelector('.contact-form form');
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const subjectInput = form.querySelector('input[type="text"]:nth-of-type(2)');
const messageTextarea = form.querySelector('textarea');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    if (validateForm()) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

function validateForm() {
    let valid = true;

    if (!nameInput.value.trim()) {
        alert('Name is required');
        valid = false;
    }
    if (!validateEmail(emailInput.value)) {
        alert('Valid email is required');
        valid = false;
    }
    if (!subjectInput.value.trim()) {
        alert('Subject is required');
        valid = false;
    }
    if (!messageTextarea.value.trim()) {
        alert('Message is required');
        valid = false;
    }

    return valid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
