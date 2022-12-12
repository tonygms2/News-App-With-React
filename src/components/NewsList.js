import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

function NewsList() {
  const [articles, setArticles] = useState([]);

  const URL =
    "https://newsapi.org/v2/everything?q=bangladesh&apiKey=b9103fd28129468bb99c59f6ff8e005b";
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios
        .get(URL)
        .then((res) => res)
        .then((data) => data);
      setArticles(response.data.articles);
      console.log(response.data.articles);
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
