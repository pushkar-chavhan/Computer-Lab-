// project1.js

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'bc4aa18067d8d8c7e651f6796e124ae4'; // Replace with your OpenWeatherMap API key
    const searchBox = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    const temperatureElement = document.querySelector('.temperature');
    const descriptionElement = document.querySelector('.description');
    const humidityElement = document.querySelector('.info-humidity span');
    const windSpeedElement = document.querySelector('.info-Wind span');
    const weatherImageElement = document.querySelector('.weather img');

    searchButton.addEventListener('click', function () {
        const location = searchBox.value;

        if (location) {
            getWeatherData(location, apiKey);
        } else {
            alert('Please enter a location');
        }
    });

    async function getWeatherData(location, apiKey) {
        const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(apiEndpoint);
            const data = await response.json();

            if (response.ok) {
                updateWeatherUI(data);
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            alert('Error fetching weather data');
        }
    }

    function updateWeatherUI(data) {
        temperatureElement.innerHTML = `${Math.round(data.main.temp)} <span>°C</span>`;
        descriptionElement.textContent = data.weather[0].description;
        humidityElement.textContent = `${data.main.humidity}%`;
        windSpeedElement.textContent = `${data.wind.speed} Km/h`;

        // Replace these image URLs with your own corresponding images
        const weatherImages = {
            'Clear': 'scloud.png',
            'Clouds': 'cloudy.png',
            'Rain': 'light.png',
            'Wind': 'wind.png',
            // Add more conditions as needed
        };

        const weatherCondition = data.weather[0].main;
        const weatherImage = weatherImages[weatherCondition];

        if (weatherImage) {
            weatherImageElement.src = weatherImage;
        } else {
            weatherImageElement.src = 'scloud.png'; // Default image if no match
        }
    }
});
