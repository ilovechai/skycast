//Function to return location of icons
function getIcon(whichicon) {
  if (whichicon == "clear-day")
    return "/res/clear-day.svg";
  else if (whichicon == "clear-night" || whichicon == "partly-cloudy-night")
    return "/res/clear-night.svg";
  else if (whichicon == "cloudy")
    return "/res/cloudy.svg";
  else if (whichicon == "partly-cloudy-day")
    return "/res/partly-cloudy-day.svg";
  else if (whichicon == "rain")
    return "/res/rain.svg";
  else if (whichicon == "snow")
    return "/res/snow.svg";
  else if (whichicon == "wind.svg")
    return "/res/wind.svg";
}
//UI class to paint/populate on html
class Ui {
  constructor() {
    this.r = document.getElementById('r1');
    this.currtemp = document.getElementById('currTemp');
    this.place = document.getElementById('Address');
  }


  paintTimed(weather, address, epoch) {

    this.place.textContent = address;
    //Convert Unix TimeStamp to normal date
    var d = new Date(epoch * 1000);
    var yyyy = d.getFullYear();
    var mm = ('0' + (d.getMonth() + 1)).slice(-2);	// Months are zero based. Add leading 0.
    var dd = ('0' + d.getDate()).slice(-2);
    var date = mm + '/' + dd + '/' + yyyy;
    var html = `<div class="col-lg-5"></div>`;


    html += ` <div class="card2 col-lg-1 rounded" style="color: white">
      ${date} <br><br> <h5>${weather.daily.data[0].summary}</h5> <br> 
      <h6 style="position: absolute; bottom: 10%;">High:${weather.daily.data[0].temperatureHigh}°F
      <br><br>
       Low:${weather.daily.data[0].temperatureLow}°F</h6> 
       <br>
       
       <img src="${getIcon(weather.daily.data[0].icon)}" width="50px" height="50px" style = "position:absolute;
       align-content: center;
       align-self: center;
       left: 35%;
       top: 90%;  
       bottom: 0;">
       
      </div>`;
    html += `<div class="col-lg-5"></div>`
    //Populate the HTML
    this.r.innerHTML = html;

  }

  paint(weather, address) {

    this.currtemp.textContent = `Currently it is ${weather.currently.temperature}°F and it feels like ${weather.currently.apparentTemperature} °F`;
    this.place.textContent = address;
    var html = `<div class="col-lg-2"></div>`;

    for (var i = 0; i < 8; i++) {
      //Convert UNIX Timestamp to noraml date
      const e = weather.daily.data[i].time;
      var d = new Date(e * 1000);
      var yyyy = d.getFullYear();
      var mm = ('0' + (d.getMonth() + 1)).slice(-2);	// Months are zero based. Add leading 0.
      var dd = ('0' + d.getDate()).slice(-2);
      var date = mm + '/' + dd + '/' + yyyy;

      html += ` <div class="card2 col-lg-1 rounded" style="color: white">
                  ${date} <br><br> <h5>${weather.daily.data[i].summary}</h5> <br> 
                  <h6 style="position: absolute; bottom: 10%;">High:${weather.daily.data[i].temperatureHigh}°F
                  <br><br>
                   Low:${weather.daily.data[i].temperatureLow}°F</h6> 
                   <br>
                   
                   <img src="${getIcon(weather.daily.data[i].icon)}" width="50px" height="50px" style = "position:absolute;
                   align-content: center;
                   align-self: center;
                   left: 35%;
                   top: 90%;  
                   bottom: 0;">
                   
                  </div>`;
    }
    html += `<div class="col-lg-2"></div>`
    //Populate the HTML
    this.r.innerHTML = html;
  }
}