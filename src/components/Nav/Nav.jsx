import SearchBar from "../SearchBar/SearchBar.jsx";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes.js";

export default function Nav({ onSearch }) {
  const radomId = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div>
      <SearchBar onSearch={onSearch} />

      <Link to={PATHROUTES.HOME}>
        <button>Home</button>
      </Link>
      <Link to={PATHROUTES.FAVORITES}>
        <button>Favorites</button>
      </Link>
      <button
        onClick={() => {
          onSearch(radomId(1, 827));
        }}
      >
        Random
      </button>
      <Link to={PATHROUTES.ABOUT}>
        <button>About</button>
      </Link>
    </div>
  );
}

Nav.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
