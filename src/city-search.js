export function citySearch() {
  //gets user input and displays data
  const userInput = document.getElementById("search").value;
  //const temp = document.createElement("p");
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=273b38d4a7de4dbbbbb10356231711&q=${userInput}`,
    { mode: "cors" },
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.current.temp_f);
      //console.log(response.current.condition.temp_f);
    });
}
