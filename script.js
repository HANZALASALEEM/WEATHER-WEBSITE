let weather = {
	apikey: "c2eac64b960d26914db38182f0ce3598",
	fetchWeather: function (city) {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=" +
				city +
				"&units=matric&appid=" +
				this.apikey
		)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data));
	},
	displayWeather: function (data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity } = data.main;
		const { speed } = data.wind;
		console.log(name, icon, description, temp, humidity, speed);
		document.querySelector(".city").innerText = "Weather in " + name;
		document.querySelector(".temp").innerText =
			Math.round(temp - 273.15) + "°C";
		document.querySelector(".discription").innerText = description;
		document.querySelector(".humidity").innerText =
			"Humidity: " + humidity + "%";
		document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
		document.body.style.backgroundImage =
			"url('https://source.unsplash.com/1600x900/?" + name + "')";
	},
	search: function () {
		this.fetchWeather(document.querySelector(".search-bar").value);
	},
};

document.querySelector(".search-button").addEventListener("click", function () {
	weather.search();
});

document
	.querySelector(".search-bar")
	.addEventListener("keyup", function (event) {
		if (event.key == "Enter") {
			weather.search();
		}
	});
weather.fetchWeather("gujranwala");

// apikey: "c2eac64b960d26914db38182f0ce3598",
