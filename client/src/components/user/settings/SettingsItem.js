import React from "react";

import Password from "./components/Password";
import Name from "./components/Name";
import Email from "./components/Email";
import Categories from "./components/Categories";

function SettingsItem({ componentName }) {
  function returnComponent() {
    switch (componentName) {
      case "password":
        return <Password />;
      case "name":
        return <Name />;
      case "email":
        return <Email />;
      case "category":
        return <Categories />;

      default:
        return <Password />;
    }
  }

  return <div className='settings__item'>{returnComponent()}</div>;
}

export default SettingsItem;
