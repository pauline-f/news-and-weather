import React, { useState, useEffect } from 'react';
import './News.css';
import OneNews from '../OneNews/OneNews';

function News(props) {

  const [news, setNews] = useState([]);
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const country = props.country ? props.country : 'se';

  useEffect(() => {
    fetch(`/api/news?country=${country}`)
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])

  return (
    <div className="News">
      <h1>News</h1>
      {
        news.map((oneNew, index) => (
          <OneNews key={index} title={oneNew.title} description={oneNew.description} link={oneNew.url} photo={oneNew.urlToImage} />
        ))
      }
    </div>
  );
}

export default News;
