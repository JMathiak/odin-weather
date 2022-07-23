import {
  weatherObject,
  getWeather,
  switchUnits,
  getSearch,
} from "./modules/weather.js";

//Function for rendering the data that is stored in the weather object. Called
// when a new location is searched also on page load.
async function renderDays() {
  let div = document.getElementById("card-holder");
  let search = "";
  let units = "";
  if (div.hasChildNodes()) {
    search = getSearch();
    units = weatherObject.units;
  } else {
    search = "dallas";
    units = "us";
  }
  if (weatherObject.days.length > 0) {
    weatherObject.days = [];
  }

  weatherObject.days = await getWeather(search, units);

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  let locationDiv = document.getElementById("location");
  locationDiv.textContent = "Showing Weather for: " + weatherObject.address;
  let unitBtn = document.getElementById("switch-units");
  if (weatherObject.units == "us") {
    locationDiv.innerText += "(\u00B0F)";
    unitBtn.innerText = `Switch to \u00B0C`;
  } else {
    locationDiv.innerText += "(\u00B0C)";
    unitBtn.innerText = `Switch to \u00B0F`;
  }
  weatherObject.days.forEach((day) => {
    let innerDiv = document.createElement("div");
    innerDiv.className = "card";

    let date = parseDate(day.date);
    let dateDiv = document.createElement("div");
    dateDiv.className = "date";
    dateDiv.innerText = date;
    innerDiv.appendChild(dateDiv);

    let iconHolder = document.createElement("div");
    iconHolder.className = "icon";
    let iconDiv = document.createElement("img");
    innerDiv.appendChild(iconHolder);
    iconHolder.appendChild(iconDiv);
    iconDiv.src = "./icons/" + day.icon + ".svg";

    let tempDiv = document.createElement("div");
    tempDiv.className = "temp";
    tempDiv.textContent =
      "High: " +
      Math.round(day.high) +
      `\u00B0` +
      " Low: " +
      Math.round(day.low) +
      `\u00B0`;
    innerDiv.appendChild(tempDiv);

    let condDiv = document.createElement("div");
    condDiv.innerText = day.condition;
    condDiv.className = "condition";
    innerDiv.appendChild(condDiv);

    let precipDiv = document.createElement("div");
    precipDiv.innerText = "Precipitation: " + Math.round(day.precip / 10) + "%";
    precipDiv.className = "precip";
    innerDiv.appendChild(precipDiv);
    div.appendChild(innerDiv);
  });

  document
    .getElementById("container")
    .classList.add(weatherObject.days[0].icon);
  let nodes = document.getElementsByClassName("card");
  let td = nodes[0].getElementsByClassName("temp");

  let currTempCell = document.getElementById("current-temp");
  currTempCell.innerText = weatherObject.currentTemp + "\u00B0";

  let currFeelCell = document.getElementById("current-feels");
  currFeelCell.innerText = weatherObject.currentFeel + "\u00B0";

  let currHumidCell = document.getElementById("current-humidity");
  currHumidCell.innerText = weatherObject.currentHumidity + "%";

  let currWindCell = document.getElementById("current-wind");
  currWindCell.innerText = weatherObject.currentWind + " mph";
}

// Function for switching units between us and metric. Called when the switch units button is clicked.
// Updates temperatures on cards and current condition temperatures. Also updates wind speed in current conditions.
async function updateDays() {
  switchUnits();

  weatherObject.days = await getWeather(
    weatherObject.address,
    weatherObject.units
  );

  let locationDiv = document.getElementById("location");
  locationDiv.textContent = "Showing Weather for: " + weatherObject.address;

  let unitBtn = document.getElementById("switch-units");
  let currWindCell = document.getElementById("current-wind");

  if (weatherObject.units == "us") {
    locationDiv.innerText += "(\u00B0F)";
    unitBtn.innerText = `Switch to \u00B0C`;
    currWindCell.innerText = weatherObject.currentWind + " mph";
  } else {
    locationDiv.innerText += "(\u00B0C)";
    unitBtn.innerText = `Switch to \u00B0F`;
    currWindCell.innerText = weatherObject.currentWind + " km/h";
  }

  let cards = document.getElementsByClassName("card");
  for (let i = 0; i < weatherObject.days.length; i++) {
    let tempDivs = cards[i].getElementsByClassName("temp");
    tempDivs[0].innerText =
      "High: " +
      Math.round(weatherObject.days[i].high) +
      `\u00B0` +
      " Low: " +
      Math.round(weatherObject.days[i].low) +
      `\u00B0`;
  }

  let currTempCell = document.getElementById("current-temp");
  currTempCell.innerText = weatherObject.currentTemp + "\u00B0";

  let currFeelCell = document.getElementById("current-feels");
  currFeelCell.innerText = weatherObject.currentFeel + "\u00B0";
}

//Adds event listeners for the search button and the switch units button.
function addEventListener() {
  document
    .getElementById("search-for-weather")
    .addEventListener("click", renderDays);

  document.getElementById("switch-units").addEventListener("click", updateDays);
}

//Called when cards are rendered. Used to properly display the month name (rather than month number) and day in correct order.
function parseDate(date) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let splitDate = date.split("-");
  let month = months[splitDate[1] - 1];

  return month + " " + parseInt(splitDate[2], 10);
}

//Calls functions for adding event listeners and render days for an initial renders. A default location is set for the search in the render days method.
window.onload = function () {
  addEventListener();
  renderDays();
};
