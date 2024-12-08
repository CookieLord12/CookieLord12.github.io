// Select the button and body element
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Add an event listener to the button
themeToggleButton.addEventListener("click", () => {
    // Toggle the "dark-theme" class on the body
    body.classList.toggle("dark-theme");

    // Log the current theme for debugging
    if (body.classList.contains("dark-theme")) {
        console.log("Dark theme activated");
        themeToggleButton.textContent = "Šviesus režimas";
    } else {
        console.log("Light theme activated");
        themeToggleButton.textContent = "Tamsus režimas";
    }
});

// Get the button element
const scrollToTopButton = document.getElementById("scroll-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopButton.style.display = "block"; // Show the button
    } else {
        scrollToTopButton.style.display = "none"; // Hide the button
    }
};

// Scroll to the top of the page when the button is clicked
scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});