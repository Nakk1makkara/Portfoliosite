// script.js

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('welcome-overlay');

    // Function to fade out the overlay
    function fadeOutOverlay() {
        overlay.style.opacity = '0';

        // Remove the overlay from the DOM after the fade-out transition
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000); // Match this time with the CSS transition duration
    }

    // Start the fade-out animation after a delay (e.g., 2 seconds)
    setTimeout(fadeOutOverlay, 2000); // Adjust the delay as needed
});

document.addEventListener('scroll', () => {
    const banner = document.getElementById('banner');
    const scrollPosition = window.scrollY;
    const bannerHeight = banner.offsetHeight;

    // Calculate the new opacity based on scroll position
    const opacity = Math.max(1 - scrollPosition / bannerHeight, 0);
    banner.style.opacity = opacity;
});
