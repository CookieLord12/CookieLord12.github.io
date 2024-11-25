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