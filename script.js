document.addEventListener("DOMContentLoaded", function () {
    const languageButton = document.getElementById("language-button");
    const languageDropdown = document.getElementById("language-dropdown");
    const languageDropdown1 = document.getElementById("language-dropdown1");
    const profileButton = document.getElementById("profile-button");
    const loginButton = document.getElementById("login-button");
    const prescriptionLink = document.getElementById("prescription-link");
    const symptomsForm = document.getElementById("symptoms-form");

    // Handle the language dropdown
    languageButton.addEventListener("click", function () {
        languageDropdown.style.display = languageDropdown.style.display === "block" ? "none" : "block";
    });
    profileButton.addEventListener("click", function () {
        languageDropdown1.style.display = languageDropdown1.style.display === "block" ? "none" : "block";
    });

    // Handle form submission (you can customize this)
    symptomsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const symptoms = document.getElementById("symptoms").value;
        // You can implement logic to handle the symptoms data
    });

    // Implement actions for profile and login buttons as needed
});
