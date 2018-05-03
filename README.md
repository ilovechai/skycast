

Visit www.skycast.today

APIS USED for Skycast.today:
1. DarkSky API (previously known as developer.forecast.io)
2. Google's GeoLocation API (To get user's precise location)
3. Google's GeoCoding API (To translate coordinates to human readable address and vice-versa)
4. Google's SignIn API

Summary:
Skycast.today is a website that gets weather details from a weather api called DarkSky (previously known as forecast.io).
It gets your location from Google's Geolocation API and behind the scenes it can process you latitude and longitude to an address via Google's GeoCoding API.

Functions:
1. On Loading, the website will show the weather with current location
  1.1 The site will show you 8 weather cards from current day (today) to 7 days after that
2. You can change weather location by typing in any address in the location text-box
  2.1 This location will be stored in the local storage so if you reload next time or close your browser it will show the last weather info you searched for.
3. You can also change the time to the future or to the past, it will show you the weather for that day


