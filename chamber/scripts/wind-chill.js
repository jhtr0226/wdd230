let temperatureElement = document.getElementById('temperature');
let windSpeedElement = document.getElementById('wind-speed');
const windChillElement = document.getElementById('wind-chill');
const calculateWindChillButton = document.getElementById("calculate-wind-chill");



calculateWindChillButton.addEventListener("click", function () {
    const temperature = parseFloat(temperatureElement.value);
    const windSpeed = parseFloat(windSpeedElement.value);

    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = windChill.toFixed(1) + ' °F';
    } else {
        windChillElement.textContent = 'N/A';
    }
})

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return parseFloat(windChill.toFixed(2));
    } else {
        return NaN;
    }
}








/*<section class="card-1">
    <h2>Weather</h2>
    <p>Temperature: <input type="number" id="temperatureInput" value="60">°F</p>
    <p>Wind Speed: <input type="number" id="windSpeedInput" value="5"> mph</p>
    <p>Wind Chill: <span id="wind-chill">N/A</span>°F</p>
    <button class="wind-chill" onclick="calculateWindChill()">Calculate Wind Chill</button>
</section>*/