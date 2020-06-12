import React from "react";

import DashboardArticle from "./DashboardArticle";
import DashboardList from "./DashboardList";

function Dashboard() {
  return (
    <div className='dashboard'>
      <DashboardList />
      <ul className='dashboard__items'>
        <DashboardArticle />
        <DashboardArticle />
        <DashboardArticle />
      </ul>
    </div>
  );
}

export default Dashboard;
