class Weather {
  constructor() {
    this.apiKey = '53fa918d4a997424d723fbb9fe3e4ea0';
  }

  //Set the location 
  setWeatherLocation(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  async getWeather() {
    //Send the request through a proxy server and get the weather data
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.apiKey}/${this.latitude},${this.longitude}`);
    //Convert to JSON Format
    const responseData = await response.json();
    //Return the weather data
    return responseData;
  }

  async getTimedWeather(epoch) {
    //Send the request through a proxy server and get the weather data
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.apiKey}/${this.latitude},${this.longitude},${epoch}`);
    //Convert the weather data
    const responseData = await response.json();
    //Return the weather data
    return responseData;
  }

}

