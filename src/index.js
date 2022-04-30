//console.log(process.env);
const APIKey = config.API_KEY;

async function getWeather() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dallas%2CTexas/next7days?unitGroup=us&include=days,hours&key=${APIKey}&contentType=json`,
    { mode: "cors" }
  );
  const weather = await response.json();
  const days = await queryJSON(weather);
  console.log(days);
  console.log(weather);
}

async function queryJSON(weather) {
  let interest = [];
  for (let i = 0; i < weather.days.length; i++) {
    let day = {
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

getWeather();
