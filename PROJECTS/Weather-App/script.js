const weatherForm = document.querySelector(".weatherForm");

const cityIP = document.querySelector(".cityIp");

const card = document.querySelector(".card");

const apiKey = "a2f36d45eeb6dae0a4d4ff516b6a0517";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const cityName = cityIP.value;

  if (cityName) {
    try {
      const wData = await getWData(cityName);
      displayWInfo(wData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Plz Enter a City🏙️");
  }
});
async function getWData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);
  console.log(response);

  if (!response.ok) {
    throw new Error("Could not Fetch Weather Data");
  }
  return await response.json();
}

function displayWInfo(data) {
  // console.log(data);
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;
  card.textContent = "";
  card.style.display = "block";

}

function getWEmoji(weatherID) {}

function displayError(msg) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = msg;
  errorDisplay.classList.add("errorDis");

  card.textContent = "";

  card.appendChild(errorDisplay);
  card.style.display = "flex";
}
;;