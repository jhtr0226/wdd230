document.addEventListener("DOMContentLoaded", () => {
    updatingVehicles();
});


function updatingVehicles() {
    const rentType = document.getElementById('rental-type').value;
    const vehicleSelect = document.getElementById('vehicle');
    vehicleSelect.innerHTML = '';

    fetch('data/prices.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (!data || !data.vehicles || !Array.isArray(data.vehicles)) {
                throw new Error('Invalid JSON format');
            }

            const vehicles = data.vehicles.filter(vehicle => vehicle.type === rentType);

            if (vehicles.length > 0) {
                vehicles[0].details.forEach(detail => {
                    const optionElement = document.createElement('option');
                    optionElement.value = detail.name;
                    optionElement.textContent = detail.name;
                    vehicleSelect.appendChild(optionElement);
                });
            }
        })
        .catch(error => console.error(error));
}
