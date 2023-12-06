import React from "react";
import { useFavourites } from "../context/FavouriteContext";
import { ArticleList } from "../components";

const Favourites = () => {
  const { favourites } = useFavourites();

  return <ArticleList articles={favourites} />;
};

export default Favourites;
