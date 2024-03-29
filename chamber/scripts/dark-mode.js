const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

modeButton.addEventListener("change", () => {
    const isDarkMode = darkModeToggle.checked;
    body.classList.toggle('dark-mode', darkModeToggle.checked);
    main.classList.toggle('dark-mode', darkModeToggle.checked);
    localStorage.setItem("darkMode", darkModeToggle.checked);
});

document.addEventListener("DOMContentLoaded", () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        body.classList.add("dark-mode");
        main.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }
});