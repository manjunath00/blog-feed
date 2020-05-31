import React from "react";

import Header from "./Header/Header";

function Base({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="main-container">{children}</div>
    </div>
  );
}

export default Base;
