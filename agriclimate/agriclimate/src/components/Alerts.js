import React, { useEffect, useState } from "react";
import { fetchWeatherNews } from "../api/newsData";
import "../styles/alerts.css";
const NewsComponent = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchNews() {
            try {
                const newsData = await fetchWeatherNews();
                setNews(newsData);
            } catch (err) {
                setError("Failed to fetch news");
            } finally {
                setLoading(false);
            }
        }
        fetchNews();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 font-semibold">
                {error}
            </div>
        );
    }

    return (
        <div className="alerts-container max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                🌱 Latest Agriculture & Weather News
            </h2>
            <ul className="space-y-4">
                {news.map((article, index) => (
                    <li key={index} className="news-item p-5 bg-gray-50 hover:bg-gray-100 rounded-lg transition shadow-sm border border-gray-200">
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-blue-700 hover:text-blue-900 hover:underline transition"
                        >
                            {article.title}
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                            Source: <span className="font-medium text-gray-800">{article.source}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsComponent;