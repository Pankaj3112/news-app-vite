import toast from "react-hot-toast";

export const apiKey = import.meta.env.VITE_NEWS_API_KEY;
export const pageSize = 16;

export const createId = (article) => {
  return article.title + article.publishedAt;
};

export async function fetchNewsAndUpdateCache() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${pageSize}`
    );
    const data = await response.json();

    data.articles.forEach((article) => {
      article.customId = createId(article);
    });

    // Store data in localStorage
    localStorage.setItem("newsCache", JSON.stringify(data.articles));
    return data.articles;
  } catch (error) {
    toast.error("Error fetching news!");
    return [];
  }
}


// useEffect(() => {
//     async function getNews() {
//       const cachedData = localStorage.getItem("newsCache");
//       let data = null;

//       if (navigator.onLine) {
//         data = await fetchNewsAndUpdateCache();
//       } else if (cachedData) {
//         data = JSON.parse(cachedData);
//       } else {
//         data = [];
//       }

//       setArticles(data);
//     }
//     getNews();
//   }, []);