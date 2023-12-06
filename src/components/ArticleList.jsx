import Article from "./Article";
import React, { useState } from "react";

import { IconButton } from "@mui/material";
import { ViewList, ViewModule } from "@mui/icons-material";

const ArticleList = ({ articles }) => {
  const [gridView, setGridView] = useState(true);

  const handleToggleView = () => {
    setGridView(!gridView);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <IconButton onClick={handleToggleView} className="p-2 scale-110">
          {gridView ? <ViewList /> : <ViewModule />}
        </IconButton>
      </div>

      {articles.length === 0 && (
        <div className="flex justify-center items-center h-96">
          <h1 className="text-3xl text-gray-400">No articles found</h1>
        </div>
      )}

      <div
        className={
          gridView
            ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 "
            : "flex flex-col gap-10 px-20"
        }
      >
        {articles.map((article, index) => (
          <Article
            key={article.title}
            article={article}
            isGrid={gridView}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
