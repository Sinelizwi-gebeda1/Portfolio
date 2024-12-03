var typed = new Typed(".looptext", {
    strings: ["Frontend Developer", "Systems Software Developer"], // Corrected from Strings to strings
    typeSpeed: 100,
    backSpeed: 100, // Corrected from backspeed to backSpeed
    backDelay: 1000,
    loop: true,
});
// Function to toggle the navigation menu on smaller screens
function toggleMenu() {
    const menu = document.querySelector('.navigation');
    menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
}


