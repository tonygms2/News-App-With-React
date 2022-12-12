import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const API_KEY = process.env.REACT_APP_API_KEY;

function NewsList() {
  const [articles, setArticles] = useState([]);

  const URL = `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=${API_KEY}`;
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios
        .get(URL)
        .then((res) => res)
        .then((data) => data);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  const item = articles.map((article, idx) => (
    <NewsItem
      title={article.title}
      key={idx}
      url={article.url}
      author={article.author}
      urlToImage={article.urlToImage}
      content={article.content}
    />
  ));
  return item;
}

export default NewsList;
