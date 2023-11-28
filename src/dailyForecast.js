export async function getForecast() {
  const forecast = document.querySelector(".footer");

  const dayZero = document.createElement("div");
  dayZero.setAttribute("class", "day-zero");
  forecast.appendChild(dayZero);

  const dayOne = document.createElement("div");
  dayOne.setAttribute("class", "day-one");
  forecast.appendChild(dayOne);

  const dayTwo = document.createElement("div");
  dayTwo.setAttribute("class", "day-two");
  forecast.appendChild(dayTwo);

  //Get data from weather api
  const response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=273b38d4a7de4dbbbbb10356231711&q=Houston&days=3&aqi=no&alerts=no",
    { mode: "cors" },
  );
  const weatherInfo = await response.json();

  //Get dates and formate to just day
  dayZero.textContent = new Date(
    weatherInfo.forecast.forecastday[0].date_epoch * 1000,
  )
    .toDateString()
    .slice(0, 4);

  const imgZero = document.createElement("img");
  dayZero.appendChild(imgZero);

  if (weatherInfo.current.condition.code == 1000) {
    imgZero.src = "/home/melinabed/repos/Weather_App/src/day/113.png";
  } else if (weatherInfo.current.condition.code == 1003) {
    imgZero.src = "/home/melinabed/repos/Weather_App/src/day/116.png";
  } else if (weatherInfo.current.condition.code == 1006) {
    imgZero.src = "/home/melinabed/repos/Weather_App/src/day/119.png";
  } else if (weatherInfo.current.condition.code == 1009) {
    imgZero.src = "/home/melinabed/repos/Weather_App/src/day/122.png";
  } else if (weatherInfo.current.condition.code == 1030) {
    imgZero.src = "/home/melinabed/repos/Weather_App/src/day/143.png";
  } else if (weatherInfo.current.condition.code == 1117) {
    imgZero.src = "/home/melinabed/repos/Weather_App/src/day/230.png";
  } else if (weatherInfo.current.condition.code == 1135) {
    imgZero.src = "/home/melinabed/repos/Weather_App/src/day/248.png";
  } else if (weatherInfo.current.condition.code == 1183) {
    imgZero.src = "/home/melinabed/repos/Weather_App/src/day/296.png";
  } else if (weatherInfo.current.condition.code == 1195) {
    imgZero.src = "/home/melinabed/repos/Weather_App/src/day/308.png";
  } else if (weatherInfo.current.condition.code == 1153) {
    imgZero.src = "/home/melinabed/repos/Weather_App/src/day/266.png";
  }

  const highandLowZero = document.createElement("div");
  highandLowZero.setAttribute("class", "temps");
  dayZero.appendChild(highandLowZero);
  const highZero = document.createElement("p");
  const lowZero = document.createElement("p");
  highandLowZero.appendChild(highZero);
  highandLowZero.appendChild(lowZero);

  highZero.textContent = `H: ${
    Math.round(weatherInfo.forecast.forecastday[0].day.maxtemp_f) + "\u00B0"
  }`;
  lowZero.textContent = `L: ${
    Math.round(weatherInfo.forecast.forecastday[0].day.mintemp_f) + "\u00B0"
  }`;

  //
  dayOne.textContent = new Date(
    weatherInfo.forecast.forecastday[1].date_epoch * 1000,
  )
    .toDateString()
    .slice(0, 4);

  const imgOne = document.createElement("img");
  dayOne.appendChild(imgOne);

  if (weatherInfo.forecast.forecastday[1].day.condition.code == 1000) {
    imgOne.src = "/home/melinabed/repos/Weather_App/src/day/113.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1003) {
    imgOne.src = "/home/melinabed/repos/Weather_App/src/day/116.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1006) {
    imgOne.src = "/home/melinabed/repos/Weather_App/src/day/119.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1009) {
    imgOne.src = "/home/melinabed/repos/Weather_App/src/day/122.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1030) {
    imgOne.src = "/home/melinabed/repos/Weather_App/src/day/143.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1117) {
    imgOne.src = "/home/melinabed/repos/Weather_App/src/day/230.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1135) {
    imgOne.src = "/home/melinabed/repos/Weather_App/src/day/248.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1183) {
    imgOne.src = "/home/melinabed/repos/Weather_App/src/day/296.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1195) {
    imgOne.src = "/home/melinabed/repos/Weather_App/src/day/308.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1153) {
    imgOne.src = "/home/melinabed/repos/Weather_App/src/day/266.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1063) {
    imgOne.src = "/home/melinabed/repos/Weather_App/src/day/176.png";
  }

  const highandLowOne = document.createElement("div");
  highandLowOne.setAttribute("class", "tempsOne");
  dayOne.appendChild(highandLowOne);
  const highOne = document.createElement("p");
  const lowOne = document.createElement("p");
  highandLowOne.appendChild(highOne);
  highandLowOne.appendChild(lowOne);

  highOne.textContent = `H: ${
    Math.round(weatherInfo.forecast.forecastday[1].day.maxtemp_f) + "\u00B0"
  }`;
  lowOne.textContent = `L: ${
    Math.round(weatherInfo.forecast.forecastday[1].day.mintemp_f) + "\u00B0"
  }`;
  //
  dayTwo.textContent = new Date(
    weatherInfo.forecast.forecastday[2].date_epoch * 1000,
  )
    .toDateString()
    .slice(0, 4);

  const imgTwo = document.createElement("img");
  dayTwo.appendChild(imgTwo);

  if (weatherInfo.forecast.forecastday[1].day.condition.code == 1000) {
    imgTwo.src = "/home/melinabed/repos/Weather_App/src/day/113.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1003) {
    imgTwo.src = "/home/melinabed/repos/Weather_App/src/day/116.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1006) {
    imgTwo.src = "/home/melinabed/repos/Weather_App/src/day/119.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1009) {
    imgTwo.src = "/home/melinabed/repos/Weather_App/src/day/122.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1030) {
    imgTwo.src = "/home/melinabed/repos/Weather_App/src/day/143.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1117) {
    imgTwo.src = "/home/melinabed/repos/Weather_App/src/day/230.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1135) {
    imgTwo.src = "/home/melinabed/repos/Weather_App/src/day/248.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1183) {
    imgTwo.src = "/home/melinabed/repos/Weather_App/src/day/296.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1195) {
    imgTwo.src = "/home/melinabed/repos/Weather_App/src/day/308.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1153) {
    imgTwo.src = "/home/melinabed/repos/Weather_App/src/day/266.png";
  } else if (weatherInfo.forecast.forecastday[1].day.condition.code == 1063) {
    imgTwo.src = "/home/melinabed/repos/Weather_App/src/day/176.png";
  }

  const highandLowTwo = document.createElement("div");
  highandLowTwo.setAttribute("class", "tempsTwo");
  dayTwo.appendChild(highandLowTwo);
  const highTwo = document.createElement("p");
  const lowTwo = document.createElement("p");
  highandLowTwo.appendChild(highTwo);
  highandLowTwo.appendChild(lowTwo);

  highTwo.textContent = `H: ${
    Math.round(weatherInfo.forecast.forecastday[2].day.maxtemp_f) + "\u00B0"
  }`;
  lowTwo.textContent = `L: ${
    Math.round(weatherInfo.forecast.forecastday[2].day.mintemp_f) + "\u00B0"
  }`;
}

export function clearDaily() {
  const daily = document.querySelectorAll(".footer");
  for (let i = 0; i < daily.length; i++) {
    daily[i].remove();
  }
}
