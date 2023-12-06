import toast from "react-hot-toast";

export const apiKey = import.meta.env.VITE_NEWS_API_KEY;
export const pageSize = 30;

export const createId = (article) => {
  return article.title + article.publishedAt;
};

