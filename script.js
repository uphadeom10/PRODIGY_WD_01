// script.js

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#333';
        navbar.style.color = '#fff';
    } else {
        navbar.style.background = 'linear-gradient(to right, #0000ff, #87ceeb)';
        navbar.style.color = '#fff';
    }
});

document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ffcc00';
        item.style.textShadow = '0 0 5px rgba(255, 204, 0, 0.8)';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = '';
        item.style.textShadow = '';
    });
});
