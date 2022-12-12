import React from "react";
import "./newsitem.css";

function NewsItem({ title, author, content, urlToImage, url }) {
  return (
    <div className="news-app">
      <div className="news-item">
        <h1>
          <a href={url}>{title}</a>
        </h1>
        <img className="news-img" src={urlToImage} alt={title} />
        <h4>
          <i>{author}</i>
        </h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default NewsItem;
