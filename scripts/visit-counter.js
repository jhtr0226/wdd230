let visitCount = localStorage.getItem("visitCount");

if (visitCount) {
    visitCount = parseInt(visitCount);
} else {
    visitCount = 0;
}

document.getElementById("visitCount").textContent = visitCount;
visitCount++;
localStorage.setItem("visitCount", visitCount);