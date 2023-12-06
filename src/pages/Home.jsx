import React from "react";
import { useArticles } from "../context/ArticleContext";
import { ArticleList } from "../components";

const Home = () => {
  const { articles } = useArticles();

  return <ArticleList articles={articles} />;
};

export default Home;
