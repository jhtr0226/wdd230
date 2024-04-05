document.addEventListener("DOMContentLoaded", () => {
    const rentalsTable = document.getElementById('rentalsTable').getElementsByTagName('tbody')[0];

    fetch('data/prices.json')
        .then(response => response.json())
        .then(data => {
            data.vehicles.forEach(vehicle => {
                const details = vehicle.details[0];
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${vehicle.type}</td>
                    <td>${details.name}</td>
                    <td>${details.capacity}</td>
                    <td>$${details.reservation[0].halfDay}</td>
                    <td>$${details.reservation[0].fullDay}</td>
                    <td>$${details.walkIn[0].halfDay}</td>
                    <td>$${details.walkIn[0].fullDay}</td>
                    <td><img src="${details.image}" alt="${details.name}" width="100"></td>
                `;
                rentalsTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});