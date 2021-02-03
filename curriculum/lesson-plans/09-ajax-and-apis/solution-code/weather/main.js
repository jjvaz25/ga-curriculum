// 1. Sign up for openweathermap.org and generate an API key at https://openweathermap.org/appid
const API_KEY = "6687e2ffcffd5070f0fa79644a020f11";
const DEFAULT_CITY = 'Washington';
const DEFAULT_STATE = 'District of Columbia';

// 2. User fetch to pull weather current data.
// for Washington, District of Columbia (hint: http://api.openweathermap.org/data/2.5/weather?q=...)
const getWeather = async (city, state) => {
  // construct request url
  const weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city},${state}&appid=${API_KEY}`;
  const requestUrl = `${weatherUrl}${query}`;

  // make request
  const rawResponse = await fetch(requestUrl);

  if (!rawResponse.ok) {
    throw new Error('request failed');
  }

  const json = await rawResponse.json();

  // 3. Print the temperature in console.
  console.log(json.main.temp);
  return json.main.temp;
};

// Bonus 1: Add a form prompting user for the city and state.
function updateUISuccess(temp, city, state) {
  // reset city and state inputs
  document.getElementById('city').value = '';
  document.getElementById('state').value = '';

  // add city and state to the DOM
  document.getElementById('location').textContent = `${city}, ${state}`;

  // add temperature to DOM
  const tempInFahrenheit = convertKelvinToFahrenheit(temp);
  document.getElementById('temp').textContent = `${tempInFahrenheit} °F`;
}

function updateUIError() {
  alert("There was an error getting weather data :(");
}

const onLoadHandler = async () => {
  const getTemp = document.getElementById('getTemp');

  getTemp.addEventListener('click', async (evt) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    
    try {
      // separation of getting data
      const temp = await getWeather(city, state);
      // and updating the page
      updateUISuccess(temp, city, state);
    } catch (err) {
      updateUIError();
    }
  });

  try {
    const temp = await getWeather(DEFAULT_CITY, DEFAULT_STATE);
    updateUISuccess(temp, DEFAULT_CITY, DEFAULT_STATE);
  } catch (err) {
    updateUIError();
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  onLoadHandler();
}

// Bonus 2: Convert answer from kelvin to fahrenheit.
const convertKelvinToFahrenheit = (kelvin) => {
  const converted = (kelvin - 273.15) * 9/5 + 32;
  return converted.toFixed(2);
};