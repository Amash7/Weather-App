function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '4ec40936e8e1fc362da0d2a2a1671fac'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const tempCelsius = (response.main.temp - 273.15).toFixed(2);
            const weatherInfo = `<span class="large-text">${tempCelsius}°C</span><br>
                                <span class="bold-text">${response.name}</span><br>
                                Weather: ${response.weather[0].main}<br>
                                Description: ${response.weather[0].description}<br>
                                Humidity: ${response.main.humidity}%<br>
                                Wind Speed: ${response.wind.speed} m/s<br>
                                Pressure: ${response.main.pressure} hPa`;

            document.getElementById('weather').innerHTML = weatherInfo;
        } else {
            document.getElementById('weather').innerHTML = 'Error fetching weather data';
        }
    };

    xhr.send();
}