import React, { useState, useEffect } from 'react';
import './News.css';
import OneNews from '../OneNews/OneNews';

function News(props) {

  const [news, setNews] = useState([]);
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const country = props.country ? props.country : 'se';

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}`)
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])

  return (
    <div className="News">
      {props.country}
      {
        news.map((oneNew, index) => (
          <OneNews key={index} title={oneNew.title} link={oneNew.url} photo={oneNew.urlToImage} />
        ))
      }
    </div>
  );
}

export default News;
