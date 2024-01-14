document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();

    const firstP = document.querySelector("footer p:first-of-type");
    firstP.innerHTML = `&copy ${year} <br>
    Johann Tellez Rodriguez <br>
    Costa Rica <img id="flag" src = "images/costa-rica.png" alt="costarican Flag">`;

    const lastModifiedDate = document.lastModified;
    const secondP = document.getElementById("lastModified");
    secondP.textContent = `Last Modified: ${lastModifiedDate}`;
});