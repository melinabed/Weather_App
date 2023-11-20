import { citySearch } from "./city-search";

let clickEventModule = (function () {
  const search = document.getElementById("search-btn");
  search.addEventListener("click", citySearch);
})();
