import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { ILoginResponseDTO } from "../models/account/ILoginResponseDTO";
import { jwtDecode } from "jwt-decode";
import { ThemeOptionsType, ThemeType } from "@/lib/theme/theme";

const keys = {
  role: "role",
  theme: "theme",
  token: "token",
};

const doSetCookie = (key: string, value: string, expire?: Date) => {
  setCookie(key, value, {
    expires: expire,
    sameSite: "strict",
  });
};

export const useClientSideCookie = () => {
  return {
    setLogin: (dto: ILoginResponseDTO) => {
      const decoded = jwtDecode(dto.token);
      const expire = new Date(decoded.exp! * 1000);
      doSetCookie(keys.role, dto.role, expire);
      doSetCookie(keys.token, dto.token, expire);
    },
    setTheme: (selected: ThemeOptionsType) => {
      doSetCookie(keys.theme, selected);
    },
    deleteLogin: () => {
      deleteCookie(keys.role);
      deleteCookie(keys.token);
    },

    getRole: () => getCookie(keys.role),
    getToken: () => getCookie(keys.token),

    getTheme: () => getCookie(keys.theme),
  };
};
