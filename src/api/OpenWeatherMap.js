import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3a9d5b31627f55be9e001e4881164466&units=metric';

module.exports = {
	getWeather(location){
		var encodedLocation = encodeURIComponent(location);
		var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestURL)
							.then(res => {
								if(res.data.message){
									throw new Error(res.data.message);
								} else {
									return res.data.main.temp;
								}

							})
							.catch(function(res) {
								throw new Error(res.data.message);
							});
	}
};