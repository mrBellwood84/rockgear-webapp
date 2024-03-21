import { getCookie } from "cookies-next";
import { IDeleteDto } from "../../../_depr/src/models/IDeleteDto";
import { useClientSideCookie } from "../cookie/clientSideCookies";

export const useRootApiAgent = () => {
  const token = useClientSideCookie().getToken();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  return {
    get: async (path: string, noToken: boolean = false) => {
      const url = `${baseUrl}/${path}`;
      console.log(url);
      return await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: noToken ? "" : `Bearer ${token}`,
        },
      });
    },
    post: async (path: string, data: {}, noToken: boolean = false) => {
      const url = `${baseUrl}/${path}`;
      return await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: noToken ? "" : `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
    },
    put: async (path: string, data: {}, noToken: boolean = false) => {
      const url = `${baseUrl}/${path}`;
      return await fetch(url, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: noToken ? "" : `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
    },
    delete: async (path: string, dto: IDeleteDto, noToken: boolean = false) => {
      const url = `${baseUrl}/${path}`;
      return await fetch(url, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: noToken ? "" : `Bearer ${token}`,
        },
        body: JSON.stringify(dto),
      });
    },
  };
};
