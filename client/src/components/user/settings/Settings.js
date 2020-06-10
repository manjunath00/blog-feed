import React, { useState } from "react";

import SettingsList from "./SettingsList";
import SettingsItem from "./SettingsItem";

function Settings() {
  const [component, setComponent] = useState("");

  return (
    <div className='settings'>
      <SettingsList setComponent={setComponent} />
      <SettingsItem componentName={component} />
    </div>
  );
}

export default Settings;
