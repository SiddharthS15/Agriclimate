export const fetchWeatherData = async () => {
    // Replace with your actual OpenWeatherMap API URL and your API key
    const apiKey = "67c59f4ead3ee3cb95f5cd2c9b4e6c35";
    const city = "Pune"; // e.g., "London"
    const units = "metric"; // "metric" for temperature in Celsius, "imperial" for Fahrenheit
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=10&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Extract and format the data for Temperature & Rainfall Graph
      const weatherData = data.list.map(item => ({
        date: item.dt_txt, // Get the date of the forecast
        temperature: item.main.temp, // Temperature in Celsius (metric units)
        rainfall: item.rain ? item.rain["3h"] : 0, // Rainfall (mm) in the last 3 hours
      }));
  
      return weatherData;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return [];
    }
  };
  