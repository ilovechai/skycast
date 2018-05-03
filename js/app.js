//init google geolocation object
const cords = new GeoLocate();
//init weather object
const weather = new Weather();
//init ui object
const ui = new Ui();
//For local Storage
var storage;

async function getWeather() {
  //Get Coordinates via Google's GeoLocation API
  const result = await cords.getCoordinates();
  //Store lat, lng to local storage
  storage = new Storage(result.lat, result.lng);
  //Get Stored Location Data
  const weatherLocation = storage.getLocationData();
  //Set Weather location (lat, lng)
  weather.setWeatherLocation(weatherLocation.lat, weatherLocation.lng);
  //Get Weather for that Location
  const today = await weather.getWeather();
  //Convert lat,lng to address via Google's Geocoding API
  var address = await cords.getLocationFrmCords(weatherLocation.lat, weatherLocation.lng);
  //Pass JSON and ADDRESS to paint on html
  ui.paint(today, address);
}

//Change location event: When Location Button is clicked
document.getElementById('w-btn-change').addEventListener('click', async (e) => {
  //Get Search values from Search field
  const place = document.getElementById('search').value;
  //Get lat, lng from Google's Gecoding API 
  const loc = await cords.getCordsFrmLocation(place);
  //Change Location in Local Storage
  storage.setLocationData(loc.lat, loc.lng);
  //Set Weather location (lat, lng)
  weather.setWeatherLocation(loc.lat, loc.lng);
  //Get Weather for that Location
  const today = await weather.getWeather();
  //Convert lat,lng to address via Google's Geocoding API
  var address = await cords.getLocationFrmCords(loc.lat, loc.lng);
  //Pass JSON and ADDRESS to paint on html
  ui.paint(today, address);
});

//Change Time Event: When Time Button is clicked
document.getElementById('time-btn').addEventListener('click', async (e) => {
  //Get Date from date picker
  const date = document.getElementById('date').value;
  //Change mm-dd-yy to UNIX timestamp
  const epoch = parseInt((new Date(date).getTime() / 1000).toFixed(0));
  //Get Weather Data for that time and location
  const day = await weather.getTimedWeather(epoch);
  //Get the lat, lng from Local Storage 
  const weatherLocation = storage.getLocationData();
  //Convert lat,lng to address via Google's Geocoding API
  var address = await cords.getLocationFrmCords(weatherLocation.lat, weatherLocation.lng);
  //Pass JSON, ADDRESS AND TIME to paint on html
  ui.paintTimed(day, address, epoch);


});

//onLoad get the weather
getWeather();
