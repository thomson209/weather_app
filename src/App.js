import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

// Calling the API
const api = {
  key: "64e914b802f62921e643564fb2542932",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {  //search is triggered by the enter key
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result); // used to see all the data pulled from the API. this Key only has access to the free version, therefore there is some data that is restriceted to us.
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date}, ${year}`;
  };

    return (
      <Container maxWidth="sm">
      <div className="App">
        <main>
          <div className="search-box"> 
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>

          {typeof weather.main != "undefined" ? ( 
            <div>
              <div className="locationBox">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                <div className="date">{dateBuilder(new Date())}</div>
            </div>

              <div className="weatherBox">  
                <div className="temprature">{Math.round(weather.main.temp)}˚c</div>
                <div className="weather">{weather.weather[0].description}</div>
              </div>

            <div className="infoBox">
              <div className="feelsLike">Feels Like {Math.round(weather.main.feels_like)}˚C</div>
              <div className="maxTemp">High: {Math.round(weather.main.temp_max)}˚C</div>
              <div className="minTemp">Low: {Math.round(weather.main.temp_min)}˚C</div>
            </div>

            </div>
              </div>
          ) : (
            ""
          )}
        </main>
      </div>
      </Container>
    );
}

  


export default App;