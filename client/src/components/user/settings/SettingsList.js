import React from "react";

function SettingsList({ setComponent }) {
  return (
    <ul className='settings__list'>
      <li className='settings__list-heading'>settings</li>
      <li className='active-category-item'>
        <a
          href='#password'
          className='settings__list-item'
          onClick={() => setComponent("password")}>
          Password
        </a>
      </li>
      <li>
        <a
          href='#name'
          className='settings__list-item'
          onClick={() => setComponent("name")}>
          Name & Birth Date
        </a>
      </li>
      <li>
        <a
          href='#email'
          className='settings__list-item'
          onClick={() => setComponent("email")}>
          Email
        </a>
      </li>
      <li>
        <a
          href='#pref'
          className='settings__list-item'
          onClick={() => setComponent("category")}>
          Category Preferences
        </a>
      </li>
    </ul>
  );
}

export default SettingsList;
