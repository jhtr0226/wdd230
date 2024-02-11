const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const modeText = document.querySelector("#mode-text")

modeButton.addEventListener("change", () => {
    const isDarkMode = darkModeToggle.checked;
    body.classList.toggle('dark-mode', darkModeToggle.checked);
    main.classList.toggle('dark-mode', darkModeToggle.checked);
    modeText.textContent = isDarkMode ? "LIGHT MODE" : "DARK MODE";
    localStorage.setItem("darkMode", darkModeToggle.checked);
});

