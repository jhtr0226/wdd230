const todaystDate = new Date();

const lastVisitDate = localStorage.getItem('lastVisitDate');

let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

if (!lastVisitDate) {
    document.getElementById('message').textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const lastVisit = new Date(lastVisitDate);

    const timeDifference = todaystDate - lastVisit;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
        document.getElementById('message').textContent = 'Back so soon! Awesome!';
    } else {
        const message = daysDifference === 1 ? 'day' : 'days';
        document.getElementById('message').textContent = `You last visited ${daysDifference} ${message} ago.`;
    }
}

visitCount++;

localStorage.setItem('lastVisitDate', todaystDate.toString());
localStorage.setItem('visitCount', visitCount.toString());

const visitCountElement = document.querySelector('.visits-counter');
if (visitCountElement) {
    visitCountElement.textContent = visitCount;
}