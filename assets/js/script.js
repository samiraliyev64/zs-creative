document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const navbarLinks = document.querySelector('.navbar-links');

    toggler.addEventListener('click', function () {
        navbarLinks.classList.toggle('show'); 
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.partners-container');
    const slider = document.querySelector('.partners-slider');

    slider.innerHTML += slider.innerHTML;

    const totalWidth = slider.scrollWidth / 2; 

    function scrollSlider() {
        const currentTransform = parseInt(getComputedStyle(slider).transform.split(',')[4]) || 0;
        slider.style.transform = `translateX(${currentTransform - 1}px)`; 
        if (Math.abs(currentTransform) >= totalWidth) {
            slider.style.transform = 'translateX(0)'; 
        }
        requestAnimationFrame(scrollSlider); 
    }

    scrollSlider(); 
});



// Select all links and the section
const links = document.querySelectorAll('.specialize-link');
const section = document.getElementById('specialize');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const bgImage = link.getAttribute('data-bg'); 
        section.style.backgroundImage = `url('${bgImage}')`; 
    });

    link.addEventListener('mouseleave', () => {
        section.style.backgroundImage = 'none'; 
    });
});


