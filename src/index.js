//console.log(process.env);
const APIKey = config.API_KEY;

async function getWeather() {
  let search = getSearch();
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}/next7days?unitGroup=us&include=days,hours&key=${APIKey}&contentType=json`,
    { mode: "cors" }
  );
  const weather = await response.json();
  const days = await queryJSON(weather);
  console.log(weather);
  return days;
}

async function queryJSON(weather) {
  let interest = [];
  for (let i = 0; i < weather.days.length; i++) {
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
  let locationDiv = document.createElement("div");
  locationDiv.textContent = weather[0].location;
  div.appendChild(locationDiv);
  weather.forEach((day) => {
    let innerDiv = document.createElement("div");
    innerDiv.textContent = day.date + " " + day.high;
    div.appendChild(innerDiv);
  });
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

addEventListener();
