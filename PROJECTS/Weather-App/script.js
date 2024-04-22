// Initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    });
  
    // Add click event listener to the map
    map.addListener("click", (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      fetchWeather(lat, lng);
    });
  }
  
  // Fetch weather information using coordinates
  function fetchWeather(lat, lng) {
    const apiKey = "c2c9ae05cd5f41d98c9143809241204";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayWeather(data);
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
      });
  }
  
  // Display weather information on the webpage
  function displayWeather(data) {
    const weatherCard = document.getElementById("weather-card");
    const weatherInfo = `
          <p>Location: ${data.name}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
      `;
    weatherCard.innerHTML = weatherInfo;
    weatherCard.style.display = "block";
  }
  
  // Load the Google Maps API
  function loadMapScript() {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_MAP_API_KEY&callback=initMap`;
    script.defer = true;
    document.head.appendChild(script);
  }
  
  // Load the map script when the page loads
  window.onload = loadMapScript;
  