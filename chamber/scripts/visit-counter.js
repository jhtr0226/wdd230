const currentDate = new Date();
const lastVisitDate = localStorage.getItem('lastVisitDate');
let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

if (!lastVisitDate) {
    document.getElementById('message').textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const lastVisit = new Date(lastVisitDate);
    const timeDifference = currentDate - lastVisit;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
        document.getElementById('message').textContent = 'Back so soon! Awesome!';
    } else {
        const message = daysDifference === 1 ? 'day' : 'days';
        document.getElementById('message').textContent = `You last visited ${daysDifference} ${message} ago.`;
    }
}

document.getElementById("visitCount").textContent = visitCount;
visitCount++;
localStorage.setItem("visitCount", visitCount);
localStorage.setItem("lastVisitDate", currentDate);




const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const currentMonthElem = document.getElementById('currentMonth');
const daysContainer = document.querySelector('.days');

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    currentMonthElem.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

    daysContainer.innerHTML = '';

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('day');
        daysContainer.appendChild(emptyCell);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElem = document.createElement('div');
        dayElem.classList.add('day');
        dayElem.textContent = day;
        daysContainer.appendChild(dayElem);
    }
}

prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial rendering
renderCalendar();