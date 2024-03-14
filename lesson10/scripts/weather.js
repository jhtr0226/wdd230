const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

/*coordenates 49.78233742160225, 6.642616903460774*/
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49&lon=6.64&appid=bb5de5d3b5542a168c6a4a0d75756bd0&units=imperial&units=imperial";


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
