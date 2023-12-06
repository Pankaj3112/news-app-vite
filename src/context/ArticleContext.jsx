import toast from "react-hot-toast";
import { createContext, useState, useEffect, useContext } from "react";
import { createId, apiKey, pageSize } from "../utils";

const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const headlinesUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${pageSize}`;
  const searchUrl = `https://newsapi.org/v2/everything?apiKey=${apiKey}&pageSize=${pageSize}&q=${search}`;

  const fetchArticles = async (url) => {
    try {
      const response = await fetch(url);

      const data = await response.json();
      console.log(data);

      data.articles.forEach((article) => {
        article.customId = createId(article);
      });

      setArticles(data.articles);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching articles!");
    }
  };

  const searchArticles = (searchTerm) => {
    setSearch(searchTerm);
  };

  const goToHomePage = () => {
    setSearch("");
  };

  useEffect(() => {
    if (search) {
      fetchArticles(searchUrl);
    } else {
      fetchArticles(headlinesUrl);
    }
  }, [search]);

  return (
    <ArticleContext.Provider value={{ articles, searchArticles, goToHomePage }}>
      {children}
    </ArticleContext.Provider>
  );
};

const useArticles = () => useContext(ArticleContext);

export { ArticleProvider, useArticles };
