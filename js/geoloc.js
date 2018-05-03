class GeoLocate {
  constructor() {
    //Google's GeoLocation API key
    this.apiKey = 'AIzaSyAU2kjwjvfCbtkzg4dx8VVVKlP0breQoGw';
    //Google's GeoCoding API key
    this.apiKey2 = 'AIzaSyB-td7AalPE1ksaUIglwCskQ3zVbnpkbSg';
  }


  async getCoordinates() {
    //Fetch coordinates from Google's GeoLoaction API
    const response = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${this.apiKey}`, { method: 'POST' });
    //Convert data to JSON format
    const responseData = await response.json();
    //Return current location
    return responseData.location;
  }

  async getCordsFrmLocation(place) {
    //Fetch coordinates from Google's GeoCoding API
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${this.apiKey2}`);
    //Convert data to JSON format
    var responseData = await response.json();
    //Return Coordinates
    return responseData.results[0].geometry.location;
  }

  async getLocationFrmCords(lat, lng) {
    //Fetch Address from Google's GeocOding API
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.apiKey2}`);
    //Convert data to JSON format
    var responseData = await response.json();
    //Return the address
    return responseData.results[0].formatted_address;
  }

}


