const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const time = new Date().getHours();

const nightColor = '#4123aa';
const dayColor = '#6f52d6';

/*coordenates 9.946397494268446, -84.05296172378557*/
const url = "https://api.openweathermap.org/data/2.5/weather?lat=9.98&lon=-84.05&appid=bb5de5d3b5542a168c6a4a0d75756bd0&units=imperial&units=imperial";


async function getWeather() {

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
getWeather();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', desc)
    captionDesc.textContent = desc;
}


if (time >= 18 || time < 6) {
    weatherIcon.style.backgroundColor = nightColor;
}
else {
    weatherIcon.style.backgroundColor = dayColor;
}