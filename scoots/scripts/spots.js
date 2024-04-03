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

function vehicleElement(vehicles) {
    const vehicleDiv = document.createElement('div');
    vehicleDiv.classList.add('vehicle');
    vehicleDiv.innerHTML = `
        <h4>${vehicles.details[0].name}</h4>
        <img src="${vehicles.details[0].image}" alt="${vehicles.details[0].name}">
        <p>Capacity: ${vehicles.details[0].capacity}</p>
        <p>Half Day Reservation: $${vehicles.details[0].reservation[0].halfDay}</p>
        <p>Full Day Reservation: $${vehicles.details[0].reservation[0].fullDay}</p>
    `;
    return vehicleDiv;
}

async function displayVehicles() {
    const vehicles = await getcars();
    console.log(vehicles);
    const vehicleSlideshow = document.getElementById('vehicleSlides');
    vehicleSlideshow.innerHTML = '';

    let vehiclesToDisplay = vehicles;

    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        vehiclesToDisplay = vehicles.slice(0, 2);

    } else if (window.innerWidth >= 1024) {
        vehiclesToDisplay = vehicles.slice(0, 3);
    }


    vehiclesToDisplay.forEach(vehicle => {
        const vElement = vehicleElement(vehicle);
        vehicleSlideshow.appendChild(vElement);
    });
}

displayVehicles();

window.addEventListener('resize', displayVehicles);