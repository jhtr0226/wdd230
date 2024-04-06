document.addEventListener("DOMContentLoaded", () => {
    const rentalsTable = document.getElementById('rentalsTable').getElementsByTagName('tbody')[0];

    function toggleImageColumn() {
        const imageColumn = document.getElementById('imageColumn');

        if (window.innerWidth >= 600 && !imageColumn) {
            const tableHead = document.querySelector('#rentalsTable thead tr');
            const imageTh = document.createElement('th');


            imageTh.textContent = 'Vehicle';
            imageTh.id = 'imageColumn';
            tableHead.appendChild(imageTh);

            const tableRows = document.querySelectorAll('#rentalsTable tbody tr');

            tableRows.forEach(row => {
                const details = JSON.parse(row.dataset.details || '{}');
                const imageCell = document.createElement('td');
                imageCell.innerHTML = `<img src="${details.image}" alt="${details.name}" width="100">`;
                row.appendChild(imageCell);
            });
        }

        else if (window.innerWidth < 600 && imageColumn) {
            imageColumn.remove();

            const imageCells = document.querySelectorAll('#rentalsTable tbody td img');
            imageCells.forEach(cell => {
                cell.closest('tr').removeChild(cell.parentNode);
            });
        }
    }

    toggleImageColumn();
    window.addEventListener('resize', toggleImageColumn);

    fetch('data/prices.json')
        .then(response => response.json())
        .then(data => {
            data.vehicles.forEach(vehicle => {
                const details = vehicle.details[0];
                const row = document.createElement('tr');
                row.dataset.details = JSON.stringify(details);
                row.innerHTML = `
                    <td>${details.name}</td>
                    <td>${details.capacity}</td>
                    <td>$${details.reservation[0].halfDay}</td>
                    <td>$${details.reservation[0].fullDay}</td>
                    <td>$${details.walkIn[0].halfDay}</td>
                    <td>$${details.walkIn[0].fullDay}</td>
                `;
                if (window.innerWidth >= 600) {
                    row.innerHTML += `<td><img src="${details.image}" alt="${details.name}" width="100"></td>`;
                }
                rentalsTable.appendChild(row);
            });
        })
        .catch(error => console.error(error));
});



