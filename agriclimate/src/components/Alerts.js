import React, { useEffect, useState } from "react";
import { fetchWeatherNews } from "../api/newsData";
import "../styles/alerts.css";

const Alerts = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            const newsData = await fetchWeatherNews();
            setNews(newsData);
        }
        fetchNews();
    }, []);

    return (
        <div className="alerts-container">
            <h2>🚨 Weather News Alerts</h2>
            <div className="alert-section">
                {news.map((article, index) => (
                    <div key={index} className="news-item">
                        <h3>{article.title}</h3>
                        <p>Source: {article.source}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Alerts;
// In the Alerts component, we fetch the latest weather news articles using the fetchWeatherNews function from the weatherData API. The news articles are displayed in a list format with the title, source, and a link to read more about the article. The useEffect hook is used to fetch the news data when the component mounts. The news data is stored in the state variable news using the setNews function. The news articles are then mapped over to display each article in the UI.