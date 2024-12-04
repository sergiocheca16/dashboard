const apiKey = "494a40e9a81f45d79bd103058240412";

const obtenerTiempo = async (city) => {
    try {
        const Api = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;
        const response = await fetch(Api)
        if(!response.ok) {
            throw new Error ("Ha surgido un error", response.status)
        }
        const data = await response.json();

        document.getElementById("meteoActual").innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p><strong>${data.current.temp_c}°C</strong><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5"></path> <path d="M10 9l4 0"></path> </svg> </p>
            <p><strong>${data.current.condition.text}</strong></p>
            <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}">
            <p><strong>Precipitaciones: </strong>${data.current.precip_in}%</p>
            <p><strong>Humedad: </strong> ${data.current.humidity}%</p>
            <p><strong>Viento: </strong> ${data.current.wind_kph} km/h</p>
            
        `;

        const forecast = data.forecast.forecastday[0].hour;
        let forecastHTML = "";
        forecast.forEach((hourData) => {
            const time = hourData.time.split(" ")[1];
            forecastHTML += `
                <div class="meteo-hora">
                    <p><strong>${time}</strong></p>
                    <img src="https:${hourData.condition.icon}" alt="${hourData.condition.text}">
                    <p><strong>${hourData.temp_c}°C</strong></p>
                </div>
            `;
        });
        document.getElementById("meteoHoras").innerHTML = forecastHTML;

    } catch (error) {
        console.log("Error al obtener los datos", error)
    }
};

obtenerTiempo("Madrid");
