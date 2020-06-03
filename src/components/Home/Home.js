import React from "react";

const Home = ({ renderCategoryWidgets }) => (
  <div className="wrapper">
    <div className="header">
      <div
        className="logo"
        style={{
          background: "url(/images/sw_logo.svg)"
        }}
      />
    </div>
    <div className="content">{renderCategoryWidgets()}</div>
  </div>
);

export default Home;