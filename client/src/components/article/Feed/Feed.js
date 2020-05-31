import React from "react";
import { withRouter } from "react-router-dom";

import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";

function Feed() {
  return (
    <>
      <Mainbar />
      <Sidebar />
    </>
  );
}

export default withRouter(Feed);
