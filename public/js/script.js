import {weatherIcon} from "./weather-icons.js";

// Get local storage dark mode value (null if not present)
let darkMode = localStorage.getItem("darkMode");

// Toggle on dark mode
const enableDarkMode = () => {
    document.querySelector("body").classList.remove("theme-light");
    document.querySelector("body").classList.add("theme-dark");
    localStorage.setItem("darkMode", "enabled");
};

// Toggle off dark mode
const disableDarkMode = () => {
    document.querySelector("body").classList.remove("theme-dark");
    document.querySelector("body").classList.add("theme-light");
    localStorage.setItem("darkMode", null);
};

// Activate dark mode
if (darkMode === "enabled")
    enableDarkMode();
else
    disableDarkMode();

// Add event listener to the #dark SVG icon to toggle dark mode
document.getElementById("dark").addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});


/**
 * Looping function to update the time and date.
 * 
 * @param {boolean} [twelveHour=true] - If true, 12-hour time is displayed. If
 *     false, 24-hour time is displayed.
 */
function updateClock(twelveHour=true) {
    // Get Date
    let date = new Date();
    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    let ampm = "";

    // Adjust if 12-hour time is on
    if (twelveHour) {
        ampm = hours >= 12 ? " pm" : " am";
        hours = hours % 12;
        hours = hours ? hours : 12; 
    }

    // Create time string
    let time = `${hours}:${minutes}:${seconds}${ampm}`;

    // Update HTML
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = `${date.toLocaleString(
        "default", {month: "short", day: "numeric", year: "numeric"}
    )}`;

    // Loop function every 1000 milliseconds.
    setTimeout(updateClock, 1000, twelveHour);
}

// Start the clock
updateClock(false);


// Find weather element
const weatherContainer = document.getElementById("box-3");

// Convenience day function
const day = date =>
    new Date(date).toLocaleString("default", {weekday: "long"});

// Get host IP address
const host = window.location.protocol + "//" + window.location.host;

/**
 * Looping function to update the weather. Loops once per two hours.
 */
const getWeatherData = async function () {
    try {
        // Get weather data from host
        const res = await fetch(`${host}/weather`);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);

        // Create HTML for the weather data
        weatherContainer.innerHTML = `
            <ul>
                <li>Today (${day(data.current.dt * 1000)})</li>
                <li class="capitalize">
                    ${weatherIcon(
                        data.current.weather[0].main,
                        data.current.dt,
                        data.current.sunset
                    )} 
                    ${data.current.weather[0].description}
                </li>
                <li>
                    Now: ${Math.round(data.current.temp)}॰C
                </li>
                <li>
                    High: ${Math.round(data.daily[0].temp.max)}॰C
                </li>
                <li>
                    Low: ${Math.round(data.daily[0].temp.min)}॰C
                </li>
            </ul>
            <ul>
                <li>Tomorrow (${day(data.daily[1].dt * 1000)})</li>
                <li class="capitalize">
                    ${weatherIcon(
                        data.daily[1].weather[0].main,
                        data.daily[1].dt,
                        data.daily[1].sunset
                    )} 
                    ${data.daily[1].weather[0].description}
                </li>
                <li>
                    Day: ${Math.round(data.daily[1].temp.day)}॰C
                </li>
                <li>
                    High: ${Math.round(data.daily[1].temp.max)}॰C
                </li>
                <li>
                    Low: ${Math.round(data.daily[1].temp.min)}॰C
                </li>
            </ul>
        `;

        setTimeout(getWeatherData, 7200000);
    } catch (err) {
        console.log(`${err} 👎`);
    }
};

// Get the current weather
getWeatherData();


