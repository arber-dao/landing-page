import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import useTheme from "@/components/hooks/useTheme";

const ThemeSwitch: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const { toggleTheme, isThemeLight } = useTheme();

  return (
    <Switch
      checked={isThemeLight}
      onChange={toggleTheme}
      className={`${
        isThemeLight ? "bg-gray-200" : "bg-gray-600"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          isThemeLight ? "translate-x-1" : "translate-x-6"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default ThemeSwitch;
