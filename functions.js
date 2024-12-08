// Theme Toggle Functionality
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

if (themeToggleButton) {
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
}

// Scroll-to-Top Button Functionality
const scrollToTopButton = document.getElementById("scroll-to-top");

if (scrollToTopButton) {
    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopButton.style.display = "block"; // Show the button
        } else {
            scrollToTopButton.style.display = "none"; // Hide the button
        }
    });

    // Scroll to the top of the page when the button is clicked
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

// Function to get the current time in hours:minutes:seconds format
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to update the clock in the HTML document
function updateClock() {
    const clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.textContent = getCurrentTime();
    }
}

// Start updating the clock every second
setInterval(updateClock, 1000);
updateClock();