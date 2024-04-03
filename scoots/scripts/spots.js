const vehiclesListed = "data/prices.json";

async function getcars() {
    try {
        const response = await fetch(vehiclesListed);
        const data = await response.json();
        return data.vehicles;
    }
    catch (error) {
        console.error(error);
    }

}



// Function to create vehicle elements
function createVehicleElement(vehicle) {
    const vehicleElement = document.createElement('div');
    vehicleElement.classList.add('vehicle');
    vehicleElement.innerHTML = `
        <h4>${vehicle.details[0].name}</h4>
        <img src="${vehicle.details[0].image}" alt="${vehicle.details[0].name}">
        <p>Capacity: ${vehicle.details[0].capacity}</p>
        <p>Half Day Reservation: $${vehicle.details[0].reservation[0].halfDay}</p>
        <p>Full Day Reservation: $${vehicle.details[0].reservation[0].fullDay}</p>
    `;
    return vehicleElement;
}

// Function to display vehicles in slideshow
function displayVehicles() {
    const vehicleSlideshow = document.getElementById('vehicleSlideshow');
    vehicleSlideshow.innerHTML = ''; // Clear previous content

    // Display only one vehicle for mobile devices
    if (window.innerWidth < 768) {
        const randomVehicleIndex = Math.floor(Math.random() * vehiclesData.vehicles.length);
        const vehicle = vehiclesData.vehicles[randomVehicleIndex];
        const vehicleElement = createVehicleElement(vehicle);
        vehicleSlideshow.appendChild(vehicleElement);
    }
    // Display multiple vehicles for medium and large devices
    else {
        vehiclesData.vehicles.forEach(vehicle => {
            const vehicleElement = createVehicleElement(vehicle);
            vehicleSlideshow.appendChild(vehicleElement);
        });
    }
}

// Display vehicles initially
displayVehicles();

// Add event listener for window resize to update slideshow
window.addEventListener('resize', displayVehicles);