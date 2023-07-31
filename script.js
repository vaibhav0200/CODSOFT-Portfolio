// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
}

// Image slider for projects
const sliders = document.querySelectorAll('.project img');

sliders.forEach(slider => {
    slider.addEventListener('click', nextSlide);
});

function nextSlide(event) {
    const slider = event.target;
    const parent = slider.parentElement;
    const projectDetails = parent.querySelector('.project-details');

    if (slider.classList.contains('active')) {
        slider.classList.remove('active');
        projectDetails.style.display = 'none';
    } else {
        sliders.forEach(s => s.classList.remove('active'));
        projectDetails.style.display = 'block';
        slider.classList.add('active');
    }
}

// Background animation
const body = document.querySelector('body');
body.style.backgroundImage = 'url("background.jpg")';
body.style.backgroundSize = 'cover';
body.style.backgroundAttachment = 'fixed';
