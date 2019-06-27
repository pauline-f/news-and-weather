import React, { useState, useEffect } from 'react';
import './News.css';
import OneNews from '../OneNews/OneNews';

function News() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=se&apiKey=***REMOVED***`)
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])

  return (
    <div className="News">

      {
        news.map((oneNew, index) => (
          <OneNews key={index} title={oneNew.title} link={oneNew.url} photo={oneNew.urlToImage} />
        ))
      }
    </div>
  );
}

export default News;
