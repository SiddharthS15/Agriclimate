export async function fetchWeatherNews() {
    const API_KEY = "74b8c247dd0d45b7a7edd9f5bc37e692";  // Replace with your API Key
    const response = await fetch(`https://newsapi.org/v2/everything?q=Maharashtra weather OR Maharashtra climate OR Maharashtra agriculture OR "Maharashtra heatwave" OR "Maharashtra monsoon"&language=en&apiKey=${API_KEY}`);
    const data = await response.json();
    
    if (data.articles) {
        return data.articles.slice(0, 50).map(article => ({
            title: article.title,
            url: article.url,
            source: article.source.name
        }));
    }
    
    return [];
}
