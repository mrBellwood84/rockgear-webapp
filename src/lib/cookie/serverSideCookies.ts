import { cookies } from "next/headers";

const keys = {
  role: "role",
  settings: "settings",
};

export const useServerSideCookie = () => {
  return {
    getRole: () => {
      return cookies().get(keys.role)?.value;
    },
  };
};
