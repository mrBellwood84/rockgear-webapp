import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { ILoginResponseDTO } from "../models/account/ILoginResponseDTO";
import { jwtDecode } from "jwt-decode";
import { LanguageSupported } from "../locales/language";

const keys = {
  language: "language",
  role: "role",
  token: "token",
};

const doSetCookie = (key: string, value: string, expire: Date) => {
  setCookie(key, value, {
    sameSite: "strict",
    expires: expire,
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
    deleteLogin: () => {
      deleteCookie(keys.role);
      deleteCookie(keys.token);
    },

    getRole: () => getCookie(keys.role),
    getToken: () => getCookie(keys.token),
  };
};
