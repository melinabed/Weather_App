import { citySearch } from "./city-search";
import { defaultWeather, clearDefault } from "./default-weather";
import { getHourly } from "./hourly";
import { getForecast } from "./dailyForecast";
import { clearDaily } from "./dailyForecast";

//Call the default weather and hourly-temps on first land
defaultWeather();
getHourly();
getForecast();

//Module for click events
let clickEventModule = (function () {
  const search = document.getElementById("search-btn");
  search.addEventListener("click", () => {
    citySearch();
    clearDefault();
    clearDaily();
  });
})();
