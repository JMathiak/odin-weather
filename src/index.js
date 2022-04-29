//console.log(process.env);
const APIKey = config.API_KEY;

async function getWeather() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dallas%2CTexas/next7days?unitGroup=us&include=days&key=${APIKey}&contentType=json`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

getWeather();
