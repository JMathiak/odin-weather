const APIKey = config.API_KEY;

//An object that holds all info needed for rendering.
const weatherObject = (() => {
  let units = "us";
  let address = "";
  let currentTemp = 0;
  let currentFeel = 0;
  let currentHumidity = 0;
  let currentWind = 0;
  let days = [];
  return {
    units,
    address,
    days,
    currentFeel,
    currentHumidity,
    currentTemp,
    currentWind,
  };
})();

//Function used to get weather when a new search is made or when units are switched.
async function getWeather(search, units) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}/next7days?unitGroup=${units}&include=days,hours&key=${APIKey}&contentType=json`,
      { mode: "cors" }
    );
    const weather = await response.json();
    let days = await queryJSON(weather);
    weatherObject.address = weather.resolvedAddress;
    document.getElementById("locationInput").value = "";
    return days;
  } catch {
    alert("No Location Found, Try Again");
    document.getElementById("locationInput").value = "";
  }
}

//Function to extract needed info from the API call.
async function queryJSON(weather) {
  let daysOfInterest = [];
  weatherObject.currentTemp = Math.round(weather.days[0].hours[0].temp);
  weatherObject.currentFeel = Math.round(weather.days[0].hours[0].feelslike);
  weatherObject.currentHumidity = Math.round(weather.days[0].hours[0].humidity);
  weatherObject.currentWind = Math.round(weather.days[0].hours[0].windspeed);
  for (let i = 0; i < 5; i++) {
    let day = {
      location: weather.address,
      date: weather.days[i].datetime,
      low: weather.days[i].tempmin,
      high: weather.days[i].tempmax,
      hourly: weather.days[i].hours,
      condition: weather.days[i].conditions,
      precip: weather.days[i].precipprob,
      icon: weather.days[i].icon,
    };
    daysOfInterest.push(day);
  }
  return daysOfInterest;
}

//Function to get the search value from the HTML.
function getSearch() {
  let search = document.getElementById("locationInput").value;
  return search;
}

//Function that changes the unit that is stored in the weather object.
function switchUnits() {
  if (weatherObject.units == "us") {
    weatherObject.units = "metric";
  } else {
    weatherObject.units = "us";
  }
}

export {
  weatherObject,
  getWeather,
  getUnitSwitchWeather,
  switchUnits,
  getSearch,
};
