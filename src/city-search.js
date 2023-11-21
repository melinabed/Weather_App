export async function citySearch() {
  //Gets the user input and displays the selected info
  const userInput = document.getElementById("search").value;
  const city = document.querySelector(".city");
  const cityName = document.createElement("h1");
  const cityTemp = document.createElement("div");
  const condition = document.createElement("p");
  const highandLow = document.createElement("div");
  highandLow.setAttribute("class", "high-low");
  const high = document.createElement("p");
  const low = document.createElement("p");
  city.appendChild(cityName);
  city.appendChild(cityTemp);
  city.appendChild(condition);
  city.appendChild(highandLow);
  highandLow.appendChild(high);
  highandLow.appendChild(low);

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=273b38d4a7de4dbbbbb10356231711&q=${userInput}&days=1&aqi=no&alerts=no`,
    { mode: "cors" },
  );
  const weatherInfo = await response.json();
  console.log(weatherInfo);
  cityName.textContent = weatherInfo.location.name;
  cityTemp.textContent = weatherInfo.current.temp_f + "\u00B0";
  condition.textContent = weatherInfo.current.condition.text;
  high.textContent = `H: ${
    weatherInfo.forecast.forecastday[0].day.maxtemp_f + "\u00B0"
  }`;
  low.textContent = `L: ${
    weatherInfo.forecast.forecastday[0].day.mintemp_f + "\u00B0"
  }`;
}
