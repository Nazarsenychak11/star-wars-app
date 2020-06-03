import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CategoryWidget.css";

const CategoryWidget = ({ categoryTitle, imageFilePath }) => (
  <div className="category-wrapper">
    <Link to={`/${categoryTitle}`}>
      <div
        className="category"
        style={{
          background: `url(${imageFilePath})`
        }}
      >
        <div className="categoryText">
          <h2>{categoryTitle}</h2>
        </div>
      </div>
    </Link>
  </div>
);

CategoryWidget.propTypes = {
  imageFilePatch: PropTypes.string,
  categoryTitle: PropTypes.string
};

export default CategoryWidget;
