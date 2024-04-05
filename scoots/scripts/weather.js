/*banner*/
const spaceDiv = document.getElementById('space');
const banner = document.createElement('div');
const bannerContent = document.createElement('div');
const bannerText = document.createElement('div');
const closeButton = document.createElement('button');



/*Weather*/
const currentTemp = document.querySelector('#current-temp');
const currentHum = document.querySelector('#current-hum');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const time = new Date().getHours();
const nightColor = '#4123aa';
const dayColor = '#6f52d6';

/*
near the terminal puerta maya
20.475284913462573 , 
-86.97315456913316

Playa del Carmen-Cozumel Ferry dock in el Centro de Cozumel
20.51173764282581 , 
-86.94910417546564*/


const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.47&lon=-86.97&appid=bb5de5d3b5542a168c6a4a0d75756bd0&units=imperial&units=imperial";
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
    currentHum.innerHTML = `${data.main.humidity}`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', desc)
    captionDesc.textContent = desc;

    /*////////////////////////////////////////////////////////////////////////*/
    const maxTemp = `${data.main.temp_max.toFixed(0)}&deg;F`;

    banner.classList.add('banner');
    bannerContent.classList.add('banner-content');
    bannerText.classList.add('banner-text');
    bannerText.innerHTML = `Highest temperature today of: ${maxTemp}`;
    closeButton.classList.add('banner-button');
    closeButton.innerHTML = '<span class="material-icons">close</span>';

    bannerContent.appendChild(bannerText);
    bannerContent.appendChild(closeButton);
    banner.appendChild(bannerContent);
    spaceDiv.innerHTML = '';
    spaceDiv.appendChild(banner);
}

closeButton.addEventListener("click", function () {
    banner.style.display = "none";
});
/*////////////////////////////////////////////////////////////////////////////*/




if (time >= 18 || time < 6) {
    weatherIcon.style.backgroundColor = nightColor;
}
else {
    weatherIcon.style.backgroundColor = dayColor;
}


/*forecast*/
const forecastDiv = document.querySelector(`#forecast`);
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.47&lon=-86.97&appid=bb5de5d3b5542a168c6a4a0d75756bd0&units=imperial&units=imperial";

async function forecasting() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            console.log("working");
            const data = await response.json();
            displayingForecast(data);
        }
        else {
            throw Error(await response.text());
        }

    }
    catch (error) {
        console.log(error);
    }
}
forecasting();


function displayingForecast(data) {
    forecastDiv.innerHTML = "";
    let nextDays = new Date();
    nextDays.setDate(nextDays.getDate() + 1);
    nextDays.setHours(15, 0, 0, 0);

    let forecastAdded = false;

    for (const forecast of data.list) {
        const forecastDay = new Date(forecast.dt * 1000);
        forecastDay.setHours(15, 0, 0, 0);

        if (forecastDay.getDate() === nextDays.getDate()) {

            const forecastTemp = `${forecast.main.temp.toFixed(0)}&deg;F`;
            const descriptions = forecast.weather[0].description;
            const weatherIcon = forecast.weather[0].icon;
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');
            forecastItem.innerHTML = `<p>${forecastDay.toDateString()}</p>
            <p>Weather: ${forecastTemp}<p>
            <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${descriptions}">
            <p>${descriptions}</p>`;

            forecastDiv.appendChild(forecastItem);
            forecastAdded = true;
            break;
        }
    }
}


