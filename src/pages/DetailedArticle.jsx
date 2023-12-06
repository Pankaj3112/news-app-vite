import React from "react";
import { Favorite } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useArticles } from "../context/ArticleContext";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { useFavourites } from "../context/FavouriteContext";

const DetailedArticle = () => {
  let { index } = useParams();
  const { articles } = useArticles();
  const { isFavourite, addFavourite, removeFavourite, handleFavouriteClick } = useFavourites();
  const article = articles[index];
  const articleIsFavorite = isFavourite(article);

  if (!article) {
    return <h1 className="text-center text-2xl mt-11">Article not found</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 text-base mb-4">{article.description}</p>

      <div className="flex mb-4 justify-between">
        <div className="flex gap-2">
          <button className="text-sm bg-gray-200 text-gray-700 rounded-full px-5 py-1"
		  onClick={() => handleFavouriteClick(article)}>
            <Favorite color={articleIsFavorite ? "error" : "action"} />
          </button>

          {article.source.name && (
            <p className="text-sm bg-gray-200 text-gray-700 rounded-full px-3 py-1">
              {article.source.name}
            </p>
          )}
          <p className="text-sm bg-gray-200 text-gray-700 rounded-full px-3 py-1">
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>

        <Link
          className="text-sm bg-gray-200 text-gray-700 rounded-full px-3 py-1"
          to={article.url}
		  target="_blank"
        >
          Read Article <InsertLinkIcon />
        </Link>
      </div>

      <img src={article.urlToImage} alt={article.title} className="mb-4" />
    </div>
  );
};

export default DetailedArticle;
