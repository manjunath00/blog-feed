import React from "react";

function DashboardList() {
  return (
    <ul class="dashboard__list">
      <li class="dashboard__list-item active">
        <a href="#" class="dashboard__list-item-link ">
          Liked
        </a>
      </li>
      <li class="dashboard__list-item">
        <a href="#" class="dashboard__list-item-link">
          Disliked
        </a>
      </li>
      <li class="dashboard__list-item">
        <a href="#" class="dashboard__list-item-link">
          Blocked
        </a>
      </li>
      <li class="dashboard__list-item">
        <a href="#" class="dashboard__list-item-link">
          Liked
        </a>
      </li>
    </ul>
  );
}

export default DashboardList;

