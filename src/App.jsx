import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  Home,
  Register,
  Login,
  NotFound,
  DetailedArticle,
  Favourites,
} from "./pages";
import { Navbar, Protected } from "./components";

function App() {
  return (
    <Router>
	  <Toaster />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/favourites" element={<Favourites />} />
        <Route exact path="/article/:index" element={<DetailedArticle />} />
        <Route
          exact
          path="/register"
          element={<Protected Component={Register} />}
        />
        <Route exact path="/login" element={<Protected Component={Login} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
