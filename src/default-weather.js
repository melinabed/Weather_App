export async function defaultWeather() {
  console.log("load default weather");

  const city = document.querySelector(".body");
  const cityName = document.createElement("h1");
  const cityTemp = document.createElement("div");
  cityTemp.setAttribute("id", "temp");

  const img = document.createElement("img");

  const condition = document.createElement("p");
  const highandLow = document.createElement("div");
  highandLow.setAttribute("class", "high-low");
  const high = document.createElement("p");
  const low = document.createElement("p");

  city.appendChild(cityName);
  city.appendChild(cityTemp);

  city.appendChild(img);

  city.appendChild(condition);
  city.appendChild(highandLow);
  highandLow.appendChild(high);
  highandLow.appendChild(low);

  const response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=273b38d4a7de4dbbbbb10356231711&q=Houston&days=3&aqi=no&alerts=no",
    { mode: "cors" },
  );
  const weatherInfo = await response.json();
  console.log(weatherInfo);

  cityName.textContent = weatherInfo.location.name;
  cityTemp.textContent = Math.round(weatherInfo.current.temp_f) + "\u00B0";

  if (weatherInfo.current.condition.code == 1000) {
    img.src = "/home/melinabed/repos/Weather_App/src/day/113.png";
  } else if (weatherInfo.current.condition.code == 1003) {
    img.src = "/home/melinabed/repos/Weather_App/src/day/116.png";
  } else if (weatherInfo.current.condition.code == 1006) {
    img.src = "/home/melinabed/repos/Weather_App/src/day/119.png";
  } else if (weatherInfo.current.condition.code == 1009) {
    img.src = "/home/melinabed/repos/Weather_App/src/day/122.png";
  } else if (weatherInfo.current.condition.code == 1030) {
    img.src = "/home/melinabed/repos/Weather_App/src/day/143.png";
  } else if (weatherInfo.current.condition.code == 1117) {
    img.src = "/home/melinabed/repos/Weather_App/src/day/230.png";
  } else if (weatherInfo.current.condition.code == 1135) {
    img.src = "/home/melinabed/repos/Weather_App/src/day/248.png";
  } else if (weatherInfo.current.condition.code == 1183) {
    img.src = "/home/melinabed/repos/Weather_App/src/day/296.png";
  } else if (weatherInfo.current.condition.code == 1195) {
    img.src = "/home/melinabed/repos/Weather_App/src/day/308.png";
  } else if (weatherInfo.current.condition.code == 1153) {
    img.src = "/home/melinabed/repos/Weather_App/src/day/266.png";
  }

  condition.textContent = weatherInfo.current.condition.text;
  high.textContent = `H: ${
    Math.round(weatherInfo.forecast.forecastday[0].day.maxtemp_f) + "\u00B0"
  }`;
  low.textContent = `L: ${
    Math.round(weatherInfo.forecast.forecastday[0].day.mintemp_f) + "\u00B0"
  }`;
}

export function clearDefault() {
  const weather = document.querySelectorAll(".body");
  for (let i = 0; i < weather.length; i++) {
    weather[i].remove();
  }
}
