// Function to toggle the display of the mobile menu
const toggleMobileMenu = (toggleId, navId) => {
    const toggleButton = document.getElementById(toggleId);
    const navigationMenu = document.getElementById(navId);

    if (toggleButton && navigationMenu) {
        toggleButton.addEventListener('click', () => {
            navigationMenu.classList.toggle('show');
        });
    }
};

// Initialize the mobile menu toggling
toggleMobileMenu('nav-toggle', 'nav-menu');

// Function to handle the action when a navigation link is clicked
function handleNavLinkClick() {
    const navigationMenu = document.getElementById('nav-menu');
    // Remove the 'show' class when a navigation link is clicked
    navigationMenu.classList.remove('show');
}

// Add click event listeners to all navigation links
const navigationLinks = document.querySelectorAll('.nav__link');
navigationLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));

// Retrieve all sections with IDs
const sections = document.querySelectorAll('section[id]');

// Function to highlight active section in the navigation menu based on scrolling
function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        const correspondingNavLink = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            correspondingNavLink.classList.add('active');
        } else {
            correspondingNavLink.classList.remove('active');
        }
    });
}

// Add a scroll event listener to highlight the active section on scroll
window.addEventListener('scroll', highlightActiveSection);

// Scroll Reveal animation configuration
const scrollRevealConfig = {
    origin: 'top',
    distance: '60px',
    duration: 2000,
};

// Initialize ScrollReveal and apply animation to elements
const scrollReveal = ScrollReveal(scrollRevealConfig);
scrollReveal.reveal('.home__social-icon', { interval: 200 });
