document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();

    const firstP = document.getElementById("business-info");
    firstP.innerHTML = `Scoots&copy; ${year} `;
});