//console.log(process.env);
const APIKey = config.API_KEY;

async function getWeather() {
  let search = getSearch();
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}/next7days?unitGroup=us&include=days,hours&key=${APIKey}&contentType=json`,
      { mode: "cors" }
    );
    const weather = await response.json();
    const days = await queryJSON(weather);
    document.getElementById("locationInput").value = "";

    return days;
  } catch {
    alert("No Location Found, Try Again");
    document.getElementById("locationInput").value = "";
  }
}

async function queryJSON(weather) {
  let interest = [];
  for (let i = 0; i < 5; i++) {
    let day = {
      location: weather.resolvedAddress,
      date: weather.days[i].datetime,
      low: weather.days[i].tempmin,
      high: weather.days[i].tempmax,
      hourly: weather.days[i].hours,
      condition: weather.days[i].conditions,
      icon: weather.days[i].icon,
    };
    interest.push(day);
  }
  return interest;
}

async function renderDays() {
  let weather = await getWeather();
  console.log(weather);
  let div = document.getElementById("weather");
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  let locationDiv = document.createElement("div");
  // locationDiv.textContent = weather[0].location;
  div.appendChild(locationDiv);
  weather.forEach((day) => {
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
    iconDiv.src = "../icons/" + day.icon + ".svg";
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
    div.appendChild(innerDiv);
  });

  document.getElementById("container").classList.add(weather[0].icon);
}

function getSearch() {
  let search = document.getElementById("locationInput").value;
  return search;
}

function addEventListener() {
  document
    .getElementById("search-for-weather")
    .addEventListener("click", renderDays);
}

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

addEventListener();
