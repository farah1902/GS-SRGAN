window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Initialize carousel and slider
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    // Attach carousel and slider functionality
    var carousels = bulmaCarousel.attach('.carousel', options);
    bulmaSlider.attach();

    // Dark Mode Toggle Functionality
    const toggleButton = document.getElementById('dark-mode-button');
    
    toggleButton.addEventListener('click', function() {
        // Select all sections where you want to apply dark mode
        const sections = document.querySelectorAll('section.hero, section.section');
        
        sections.forEach(section => {
            section.classList.toggle('is-dark');
        });

        // Toggle the button text between 'Dark Mode' and 'Light Mode'
        if (sections[0].classList.contains('is-dark')) {
            toggleButton.textContent = 'Light Mode';
        } else {
            toggleButton.textContent = 'Dark Mode';
        }
    });

    // Set initial button text to 'Dark Mode' since we're starting with light mode
    toggleButton.textContent = 'Dark Mode';
});
