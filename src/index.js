import { citySearch } from "./city-search";
import { defaultWeather, clearDefault } from "./default-weather";

//Call the default weather on first land
defaultWeather();

let clickEventModule = (function () {
  const search = document.getElementById("search-btn");
  search.addEventListener("click", () => {
    citySearch();
    clearDefault();
  });
})();
