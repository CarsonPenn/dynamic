// Toggle menu for mobile view
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// This was created using chat gpt, i was mad struggling with this