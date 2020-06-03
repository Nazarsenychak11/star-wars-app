import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchForm.css";

let timeout = null;

const SearchForm = ({ callback }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    const search = event.target.value;
    setSearchTerm(search);
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(false, search);
    }, 500);
  };

  return (
    <div className="searchform-wrapper">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={"Search"}
      />
    </div>
  );
};

SearchForm.propTypes = {
  callback: PropTypes.func
};

export default SearchForm;
