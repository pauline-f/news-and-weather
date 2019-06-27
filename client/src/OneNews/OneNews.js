import React from 'react';
import './OneNews.css';

function OneNews(props) {
  return (
    <div className="OneNews">
      <img alt="news" src={props.photo}></img>
      
      <a href={props.link}><h5>{props.title}</h5><p>{props.description}</p></a>
    </div>
  );
}

export default OneNews;
