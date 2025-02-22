export const fetchWeatherData = async () => {
  // Replace with your actual OpenWeatherMap API URL and your API key
  const apiKey = "67c59f4ead3ee3cb95f5cd2c9b4e6c35";
  const city = "Pune"; // e.g., "London"
  const units = "metric"; // "metric" for temperature in Celsius, "imperial" for Fahrenheit
  const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=10&appid=${apiKey}`;
  const urlAQI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=18.5204&lon=73.8567&appid=${apiKey}`; // Replace with the coordinates of the city

  try {
    const weatherResponse = await fetch(urlWeather);
    const weatherData = await weatherResponse.json();

    const aqiResponse = await fetch(urlAQI);
    const aqiData = await aqiResponse.json();

    // Extract and format the data for Temperature, Humidity, Rainfall, Wind Speed, and AQI
    const weatherForecast = weatherData.list.map(item => ({
      date: item.dt_txt, // Get the date of the forecast
      temperature: item.main.temp, // Temperature in Celsius (metric units)
      humidity: item.main.humidity, // Humidity percentage
      rainfall: item.rain ? item.rain["3h"] : 0, // Rainfall (mm) in the last 3 hours
      windSpeed: item.wind.speed, // Wind speed in meters per second (m/s)
    }));

    // Assuming the AQI is constant for all data points (can be adjusted for hourly AQI if needed)
    const aqi = aqiData.list[0].main.aqi; // Air Quality Index

    // Combine the AQI into the weather data
    const completeWeatherData = weatherForecast.map(item => ({
      ...item,
      aqi: aqi, // Adding the AQI data to the weather data
    }));

    return completeWeatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return [];
  }
};
