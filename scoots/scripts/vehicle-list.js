function updatingVehicles() {
    const rentType = document.getElementById('rental-type').value;
    const vehicleSelect = document.getElementById('vehicle');
    vehicleSelect.innerHTML = '';

    if (rentType === "") {
        const optionElement = document.createElement('option');
        optionElement.textContent = 'Please Select';
        vehicleSelect.appendChild(optionElement);
    } else {
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
                    vehicles.forEach(vehicle => {
                        vehicle.details.forEach(detail => {
                            const optionElement = document.createElement('option');
                            optionElement.value = detail.name;
                            optionElement.textContent = detail.name;
                            vehicleSelect.appendChild(optionElement);
                        });
                    });
                }
            })
            .catch(error => console.error(error));
    }
}

document.getElementById('rental-type').addEventListener('change', updatingVehicles);