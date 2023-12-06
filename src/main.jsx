import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ArticleProvider } from "./context/ArticleContext.jsx";
import { FavouriteProvider } from "./context/FavouriteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
      <FavouriteProvider>
        <ArticleProvider>
          <App />
        </ArticleProvider>
      </FavouriteProvider>
    </AuthProvider>
);
