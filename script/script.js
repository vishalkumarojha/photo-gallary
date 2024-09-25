const navLinks = document.querySelectorAll('.nav-link');
const galleries = document.querySelectorAll('.event-gallery');

// Add event listener for each nav link
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Remove 'active' class from all links and galleries
    navLinks.forEach((link) => link.classList.remove('active'));
    galleries.forEach((gallery) => gallery.classList.remove('active'));

    // Add 'active' class to clicked link and corresponding gallery
    link.classList.add('active');
    const eventId = link.getAttribute('data-event');
    const activeGallery = document.getElementById(eventId);
    activeGallery.classList.add('active');
  });
});