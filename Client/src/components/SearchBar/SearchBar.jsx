import PropTypes from "prop-types";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
