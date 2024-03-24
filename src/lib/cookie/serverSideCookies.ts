import { cookies } from "next/headers";
import { cookieKeys } from "./cookieKeys";
import { ISettings } from "../models/ISettings";

export const useServerSideCookie = () => {
  return {
    getRole: () => {
      return cookies().get(cookieKeys.role)?.value;
    },
    getSetting: () => {
      const rawData = cookies().get(cookieKeys.settings)?.value ?? "{}";
      return JSON.parse(rawData) as ISettings;
    },
  };
};
