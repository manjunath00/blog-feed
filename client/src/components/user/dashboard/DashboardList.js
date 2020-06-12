import React from "react";

function DashboardList() {
  return (
    <ul className='dashboard__list'>
      <li className='dashboard__list-item'>
        <a className='dashboard__list-item-link  active'>Liked</a>
      </li>
      <li className='dashboard__list-item'>
        <a className='dashboard__list-item-link'>Disliked</a>
      </li>
      <li className='dashboard__list-item'>
        <a className='dashboard__list-item-link'>Blocked</a>
      </li>
      <li className='dashboard__list-item'>
        <a className='dashboard__list-item-link'>Liked</a>
      </li>
    </ul>
  );
}

export default DashboardList;
