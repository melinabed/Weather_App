export function citySearch() {
  const userInput = document.getElementById("search").value;
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=273b38d4a7de4dbbbbb10356231711&q=${userInput}`,
    { mode: "cors" },
  ).then(function (response) {
    console.log(response.json());
  });
}
