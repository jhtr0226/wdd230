document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();

    const firstP = document.querySelector("footer p:first-of-type");
    firstP.innerHTML = `&copy ${year} 
    Johann Tellez Rodriguez <br>WDD230 Web Frontend Development <br><br>guadasells@guadalupe.com <br>+506 6370 9726`;

    const lastModifiedDate = document.lastModified;
    const secondP = document.getElementById("lastModified");
    secondP.textContent = `Last Modified: ${lastModifiedDate}`;
});