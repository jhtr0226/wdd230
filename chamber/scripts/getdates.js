document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();

    const lastModifiedDate = document.lastModified;
    const secondP = document.getElementById("lastModified");
    secondP.textContent = `Last Modified: ${lastModifiedDate}`;
});