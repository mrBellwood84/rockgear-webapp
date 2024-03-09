import { IDeleteDto } from "../../models/IDeleteDto";

export const root_apiAgent = {
  get: async (url: string) => {
    return await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {},
    });
  },
  post: async (url: string, dto: object) => {
    return await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });
  },
  put: async (url: string, dto: object) => {
    return await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });
  },
  delete: async (url: string, dto: IDeleteDto) => {
    return await fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });
  },
};
