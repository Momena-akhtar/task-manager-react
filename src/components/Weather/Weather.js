import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = "74f3d74b56ae84cc8618ee84967abbad"; // Your API key
    const encodedCity = encodeURIComponent(city); // Ensures city name is properly encoded
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${API_KEY}&units=metric`;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError(`Failed to fetch weather data: ${err.response ? err.response.data.message : err.message}`);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
  <h2
    style={{
      fontSize: '24px',
      fontWeight: '600',
      color: '#ccc',
      marginBottom: '10px',
      fontFamily: "'Kumbh Sans', sans-serif", // Using Kumbh Sans
    }}
  >
    Weather in {weatherData.name}
  </h2>
  <p
    style={{
      fontSize: '18px',
      color: '#ccc',
      fontFamily: "'Kumbh Sans', sans-serif", // Using Kumbh Sans
    }}
  >
    Temperature: {weatherData.main.temp}°C
  </p>
  <p
    style={{
      fontSize: '18px',
      color: '#ccc',
      fontFamily: "'Kumbh Sans', sans-serif", // Using Kumbh Sans
    }}
  >
    Weather: {weatherData.weather[0].description}
  </p>
  <p
    style={{
      fontSize: '18px',
      color: '#ccc',
      fontFamily: "'Kumbh Sans', sans-serif", // Using Kumbh Sans
    }}
  >
    Humidity: {weatherData.main.humidity}%
  </p>
  <p
    style={{
      fontSize: '18px',
      color: '#ccc',
      fontFamily: "'Kumbh Sans', sans-serif", // Using Kumbh Sans
    }}
  >
    Wind Speed: {weatherData.wind.speed} m/s
  </p>
</div>

  );
};

export default Weather;
