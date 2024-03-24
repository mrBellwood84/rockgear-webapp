"use client";

import { ISettings } from "../models/ISettings";

const SETTING_KEY = "settings";

export const useSettingsStorage = () => {
  return {
    setSettings: (settings: ISettings) => {
      if (typeof window === "undefined") return;
      const str = JSON.stringify(settings);
      localStorage.setItem(SETTING_KEY, str);
    },
    getSettings: () => {
      if (typeof window === "undefined") return {};
      const data = localStorage.getItem(SETTING_KEY) ?? "{}";
      return JSON.parse(data) as ISettings;
    },
  };
};
