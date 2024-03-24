import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { ILoginResponseDTO } from "../models/account/ILoginResponseDTO";
import { jwtDecode } from "jwt-decode";
import { ISettings } from "../models/ISettings";
import { cookieKeys } from "./cookieKeys";

const doSetCookie = (key: string, value: string, expire: Date) => {
  setCookie(key, value, {
    sameSite: "strict",
    expires: expire,
  });
};

const createExpireDate = (days: number = 7) => {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return date;
};

export const useClientSideCookie = () => {
  return {
    setLogin: (dto: ILoginResponseDTO) => {
      const decoded = jwtDecode(dto.token);
      const expire = new Date(decoded.exp! * 1000);
      doSetCookie(cookieKeys.role, dto.role, expire);
      doSetCookie(cookieKeys.token, dto.token, expire);
    },

    setSettings: (settings: ISettings) => {
      const dataStr = JSON.stringify(settings);
      doSetCookie(cookieKeys.settings, dataStr, createExpireDate());
    },

    deleteLogin: () => {
      deleteCookie(cookieKeys.role);
      deleteCookie(cookieKeys.token);
    },

    getRole: () => getCookie(cookieKeys.role),
    getToken: () => getCookie(cookieKeys.token),

    getSettings: () => {
      const rawData = getCookie(cookieKeys.settings) ?? "{}";
      return JSON.parse(rawData) as ISettings;
    },
  };
};
