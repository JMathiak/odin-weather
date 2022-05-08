const APIKey = config.API_KEY;

const weatherObject = (() => {
  let units = "us";
  let address = "";
  let days = [];
  return {
    units,
    address,
    days,
  };
})();

async function getWeather() {
  let search = getSearch();
  let units = weatherObject.units;
  console.log(units);
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

async function getUnitSwitchWeather() {
  let location = weatherObject.address;
  console.log(location);
  let units = weatherObject.units;
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=${units}&include=days,hours&key=${APIKey}&contentType=json`,
      { mode: "cors" }
    );
    const weather = await response.json();
    let days = await queryJSON(weather);
    document.getElementById("locationInput").value = "";
    return days;
  } catch {
    alert("No Location Found, Try Again");
    console.log(location);
    document.getElementById("locationInput").value = "";
  }
}

async function queryJSON(weather) {
  console.log(weather);
  let daysOfInterest = [];
  for (let i = 0; i < 5; i++) {
    let day = {
      location: weather.address,
      date: weather.days[i].datetime,
      low: weather.days[i].tempmin,
      high: weather.days[i].tempmax,
      hourly: weather.days[i].hours,
      condition: weather.days[i].conditions,
      icon: weather.days[i].icon,
    };
    daysOfInterest.push(day);
  }
  return daysOfInterest;
}

function getSearch() {
  let search = document.getElementById("locationInput").value;
  return search;
}

function switchUnits() {
  if (weatherObject.units == "us") {
    weatherObject.units = "metric";
  } else {
    weatherObject.units = "us";
  }
}

export { weatherObject, getWeather, getUnitSwitchWeather, switchUnits };
