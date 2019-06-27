import React from 'react';
import './OneNews.css';

function OneNews(props) {
  return (
    <div className="OneNews">
      <h5>{props.title}</h5>
      <a href={props.link}>Link</a>
      <img alt="news" src={props.photo}></img>
    </div>
  );
}

export default OneNews;
