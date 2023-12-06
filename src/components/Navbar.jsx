import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useArticles } from "../context/ArticleContext";
import { useFavourites } from "../context/FavouriteContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { searchArticles, goToHomePage } = useArticles();
  const [search, setSearch] = useState("");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleLogout = async () => {
	await logout();
	window.location.reload();
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#264653] p-6 py-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">News App</span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-white">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-[#F4A261] mr-4"
			onClick={goToHomePage}
          >
            Home
          </Link>

    	  <Link
            to="/favourites"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-[#F4A261] mr-4"
          >
            Favourites
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          {isHomePage && (
            <div className="flex items-center bg-white rounded-full pl-4 h-8 ">
              <TextField
                placeholder="Search..."
                className="flex-1 rounded-full focus:outline-none"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <IconButton
                onClick={() => searchArticles(search)}
              >
                <SearchIcon />
              </IconButton>
            </div>
          )}

          {user ? (
            <>
              <Avatar
                alt={user.displayName}
                src={user.photoURL ? user.photoURL : "xyz"}
              />

              <button
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#E76F51] hover:bg-white mt-4 lg:mt-0"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#E76F51] hover:bg-white mt-4 lg:mt-0"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#E76F51] hover:bg-white mt-4 lg:mt-0"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
