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

document.getElementById("submit-button").addEventListener("click", () => {
    // Gauti formos įvesties laukų reikšmes
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    const q1 = parseInt(document.getElementById("q1").value, 10);
    const q2 = parseInt(document.getElementById("q2").value, 10);
    const q3 = parseInt(document.getElementById("q3").value, 10);
    const q4 = parseInt(document.getElementById("q4").value, 10);
    const q5 = parseInt(document.getElementById("q5").value, 10);

    // Reguliarūs reiškiniai patikroms
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{7,15}$/;

    // Klaidos tikrinimas
    if (!emailRegex.test(email)) {
        alert("Prašome įvesti galiojantį el. pašto adresą.");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Prašome įvesti galiojantį telefono numerį (7-15 skaičių).");
        return;
    }

    if (address.length < 5) {
        alert("Adresas per trumpas. Prašome įvesti bent 5 simbolius.");
        return;
    }

    // Suformuoti objektą su surinktais duomenimis
    const formData = {
        Vardas: name,
        Pavardė: surname,
        "El. paštas": email,
        "Telefono numeris": phone,
        Adresas: address,
        Klausimai: {
            "Svetainės dizainas": q1,
            "Funkcionalumas": q2,
            "Turinio kokybė": q3,
            "Svetainės greitis": q4,
            "Informacijos radimas": q5,
        },
    };

    // Apskaičiuoti vidurkį
    const averageRating = ((q1 + q2 + q3 + q4 + q5) / 5).toFixed(2);

    // Nustatyti vidurkio spalvą
    let averageColor = "red"; // Numatytasis 0-4
    if (averageRating >= 7) {
        averageColor = "green";
    } else if (averageRating >= 4) {
        averageColor = "orange";
    }

    // Atvaizduoti rezultatą tinklalapyje
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h3>Įvesti duomenys:</h3>
        <p><strong>Vardas:</strong> ${formData.Vardas}</p>
        <p><strong>Pavardė:</strong> ${formData.Pavardė}</p>
        <p><strong>El. paštas:</strong> ${formData["El. paštas"]}</p>
        <p><strong>Telefono numeris:</strong> ${formData["Telefono numeris"]}</p>
        <p><strong>Adresas:</strong> ${formData.Adresas}</p>
        <h4>Klausimų vertinimai:</h4>
        <ul>
            <li><strong>Svetainės dizainas:</strong> ${formData.Klausimai["Svetainės dizainas"]}</li>
            <li><strong>Funkcionalumas:</strong> ${formData.Klausimai.Funkcionalumas}</li>
            <li><strong>Turinio kokybė:</strong> ${formData.Klausimai["Turinio kokybė"]}</li>
            <li><strong>Svetainės greitis:</strong> ${formData.Klausimai["Svetainės greitis"]}</li>
            <li><strong>Informacijos radimas:</strong> ${formData.Klausimai["Informacijos radimas"]}</li>
        </ul>
        <h4>Vidutinis vertinimas:</h4>
        <p style="color: ${averageColor}; font-weight: bold;">${formData.Vardas} ${formData.Pavardė} (${formData["El. paštas"]}): ${averageRating}</p>
    `;

    // Išvesti rezultatą naršyklės terminale
    console.log(formData);
});