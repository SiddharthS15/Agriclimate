import React, { useEffect, useState } from "react";
import { fetchWeatherNews } from "../api/newsData";
import "./../styles/alerts.css";

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
