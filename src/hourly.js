export async function getHourly() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=273b38d4a7de4dbbbbb10356231711&q=Houston&days=3&aqi=no&alerts=no",
    { mode: "cors" },
  );
  const weatherInfo = await response.json();

  const hourly = document.querySelector(".hourly");

  const hourZero = document.createElement("div");
  hourly.appendChild(hourZero);
  hourZero.textContent = weatherInfo.forecast.forecastday[0].hour[0].time
    .slice(11)
    .replace("00:00", "12 AM");

  const hourOne = document.createElement("div");
  hourly.appendChild(hourOne);
  hourOne.textContent = weatherInfo.forecast.forecastday[0].hour[1].time
    .slice(11)
    .replace("01:00", "1 AM");

  const hourTwo = document.createElement("div");
  hourly.appendChild(hourTwo);
  hourTwo.textContent = weatherInfo.forecast.forecastday[0].hour[2].time
    .slice(11)
    .replace("02:00", "2 AM");

  const hourThree = document.createElement("div");
  hourly.appendChild(hourThree);
  hourThree.textContent = weatherInfo.forecast.forecastday[0].hour[3].time
    .slice(11)
    .replace("03:00", "3 AM");

  const hourFour = document.createElement("div");
  hourly.appendChild(hourFour);
  hourFour.textContent = weatherInfo.forecast.forecastday[0].hour[4].time
    .slice(11)
    .replace("04:00", "4 AM");

  const hourFive = document.createElement("div");
  hourly.appendChild(hourFive);
  hourFive.textContent = weatherInfo.forecast.forecastday[0].hour[5].time
    .slice(11)
    .replace("05:00", "5 AM");

  const hourSix = document.createElement("div");
  hourly.appendChild(hourSix);
  hourSix.textContent = weatherInfo.forecast.forecastday[0].hour[6].time
    .slice(11)
    .replace("06:00", "6 AM");

  const hourSeven = document.createElement("div");
  hourly.appendChild(hourSeven);
  hourSeven.textContent = weatherInfo.forecast.forecastday[0].hour[7].time
    .slice(11)
    .replace("07:00", "7 AM");

  const hourEight = document.createElement("div");
  hourly.appendChild(hourEight);
  hourEight.textContent = weatherInfo.forecast.forecastday[0].hour[8].time
    .slice(11)
    .replace("08:00", "8 AM");

  const hourNine = document.createElement("div");
  hourly.appendChild(hourNine);
  hourNine.textContent = weatherInfo.forecast.forecastday[0].hour[9].time
    .slice(11)
    .replace("09:00", "9 AM");

  const hourTen = document.createElement("div");
  hourly.appendChild(hourTen);
  hourTen.textContent = weatherInfo.forecast.forecastday[0].hour[10].time
    .slice(11)
    .replace("10:00", "10 AM");

  const hourEleven = document.createElement("div");
  hourly.appendChild(hourEleven);
  hourEleven.textContent = weatherInfo.forecast.forecastday[0].hour[11].time
    .slice(11)
    .replace("11:00", "11 AM");

  const hourTwelve = document.createElement("div");
  hourly.appendChild(hourTwelve);
  hourTwelve.textContent = weatherInfo.forecast.forecastday[0].hour[12].time
    .slice(11)
    .replace("12:00", "12 PM");

  const hourThirteen = document.createElement("div");
  hourly.appendChild(hourThirteen);
  hourThirteen.textContent = weatherInfo.forecast.forecastday[0].hour[13].time
    .slice(11)
    .replace("13:00", "1 PM");

  const hourFourteen = document.createElement("div");
  hourly.appendChild(hourFourteen);
  hourFourteen.textContent = weatherInfo.forecast.forecastday[0].hour[14].time
    .slice(11)
    .replace("14:00", "2 PM");

  const hourFifthteen = document.createElement("div");
  hourly.appendChild(hourFifthteen);
  hourFifthteen.textContent = weatherInfo.forecast.forecastday[0].hour[15].time
    .slice(11)
    .replace("15:00", "3 PM");

  const hourSixteen = document.createElement("div");
  hourly.appendChild(hourSixteen);
  hourSixteen.textContent = weatherInfo.forecast.forecastday[0].hour[16].time
    .slice(11)
    .replace("16:00", "4 PM");

  const hourSeventeen = document.createElement("div");
  hourly.appendChild(hourSeventeen);
  hourSeventeen.textContent = weatherInfo.forecast.forecastday[0].hour[17].time
    .slice(11)
    .replace("17:00", "5 PM");

  const hourEighteen = document.createElement("div");
  hourly.appendChild(hourEighteen);
  hourEighteen.textContent = weatherInfo.forecast.forecastday[0].hour[18].time
    .slice(11)
    .replace("18:00", "6 PM");

  const hourNineteen = document.createElement("div");
  hourly.appendChild(hourNineteen);
  hourNineteen.textContent = weatherInfo.forecast.forecastday[0].hour[19].time
    .slice(11)
    .replace("19:00", "7 PM");

  const hourTwenty = document.createElement("div");
  hourly.appendChild(hourTwenty);
  hourTwenty.textContent = weatherInfo.forecast.forecastday[0].hour[20].time
    .slice(11)
    .replace("20:00", "8 PM");

  const hourTwentyOne = document.createElement("div");
  hourly.appendChild(hourTwentyOne);
  hourTwentyOne.textContent = weatherInfo.forecast.forecastday[0].hour[21].time
    .slice(11)
    .replace("21:00", "9 PM");

  const hourTwentyTwo = document.createElement("div");
  hourly.appendChild(hourTwentyTwo);
  hourTwentyTwo.textContent = weatherInfo.forecast.forecastday[0].hour[22].time
    .slice(11)
    .replace("22:00", "10 PM");

  const hourTwentyThree = document.createElement("div");
  hourly.appendChild(hourTwentyThree);
  hourTwentyThree.textContent =
    weatherInfo.forecast.forecastday[0].hour[23].time
      .slice(11)
      .replace("23:00", "11 PM");

  //Temperatures for each time div
  const hourZeroTemp = document.createElement("div");
  hourZero.appendChild(hourZeroTemp);
  hourZeroTemp.textContent = weatherInfo.forecast.forecastday[0].hour[0].temp_f;

  const hourOneTemp = document.createElement("div");
  hourOne.appendChild(hourOneTemp);
  hourOneTemp.textContent = weatherInfo.forecast.forecastday[0].hour[1].temp_f;

  const hourTwoTemp = document.createElement("div");
  hourTwo.appendChild(hourTwoTemp);
  hourTwoTemp.textContent = weatherInfo.forecast.forecastday[0].hour[2].temp_f;

  const hourThreeTemp = document.createElement("div");
  hourThree.appendChild(hourThreeTemp);
  hourThreeTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[3].temp_f;

  const hourFourTemp = document.createElement("div");
  hourFour.appendChild(hourFourTemp);
  hourFourTemp.textContent = weatherInfo.forecast.forecastday[0].hour[4].temp_f;

  const hourFiveTemp = document.createElement("div");
  hourFive.appendChild(hourFiveTemp);
  hourFiveTemp.textContent = weatherInfo.forecast.forecastday[0].hour[5].temp_f;

  const hourSixTemp = document.createElement("div");
  hourSix.appendChild(hourSixTemp);
  hourSixTemp.textContent = weatherInfo.forecast.forecastday[0].hour[6].temp_f;

  const hourSevenTemp = document.createElement("div");
  hourSeven.appendChild(hourSevenTemp);
  hourSevenTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[7].temp_f;

  const hourEightTemp = document.createElement("div");
  hourEight.appendChild(hourEightTemp);
  hourEightTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[8].temp_f;

  const hourNineTemp = document.createElement("div");
  hourNine.appendChild(hourNineTemp);
  hourNineTemp.textContent = weatherInfo.forecast.forecastday[0].hour[9].temp_f;

  const hourTenTemp = document.createElement("div");
  hourTen.appendChild(hourTenTemp);
  hourTenTemp.textContent = weatherInfo.forecast.forecastday[0].hour[10].temp_f;

  const hourElevenTemp = document.createElement("div");
  hourEleven.appendChild(hourElevenTemp);
  hourElevenTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[11].temp_f;

  const hourTwelveTemp = document.createElement("div");
  hourTwelve.appendChild(hourTwelveTemp);
  hourTwelveTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[12].temp_f;

  const hourThirteenTemp = document.createElement("div");
  hourThirteen.appendChild(hourThirteenTemp);
  hourThirteenTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[13].temp_f;

  const hourFourteenTemp = document.createElement("div");
  hourFourteen.appendChild(hourFourteenTemp);
  hourFourteenTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[14].temp_f;

  const hourFifthteenTemp = document.createElement("div");
  hourFifthteen.appendChild(hourFifthteenTemp);
  hourFifthteenTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[15].temp_f;

  const hourSixteenTemp = document.createElement("div");
  hourSixteen.appendChild(hourSixteenTemp);
  hourSixteenTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[16].temp_f;

  const hourSeventeenTemp = document.createElement("div");
  hourSeventeen.appendChild(hourSeventeenTemp);
  hourSeventeenTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[17].temp_f;

  const hourEighteenTemp = document.createElement("div");
  hourEighteen.appendChild(hourEighteenTemp);
  hourEighteenTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[18].temp_f;

  const hourNineteenTemp = document.createElement("div");
  hourNineteen.appendChild(hourNineteenTemp);
  hourNineteenTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[19].temp_f;

  const hourTwentyTemp = document.createElement("div");
  hourTwenty.appendChild(hourTwentyTemp);
  hourTwentyTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[20].temp_f;

  const hourTwentyOneTemp = document.createElement("div");
  hourTwentyOne.appendChild(hourTwentyOneTemp);
  hourTwentyOneTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[21].temp_f;

  const hourTwentyTwoTemp = document.createElement("div");
  hourTwentyTwo.appendChild(hourTwentyTwoTemp);
  hourTwentyTwoTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[22].temp_f;

  const hourTwentyThreeTemp = document.createElement("div");
  hourTwentyThree.appendChild(hourTwentyThreeTemp);
  hourTwentyThreeTemp.textContent =
    weatherInfo.forecast.forecastday[0].hour[23].temp_f;
}
