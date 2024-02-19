import { IStringset } from "../../models/stringset/IStringset";
import { mockAgent } from "./mockAgent";
import { stringsetSeedData } from "./seedDataCollection";

export const stringsetApiAgent = {
  getAll: async (): Promise<IStringset[]> => {
    return await mockAgent.getAllStringsets(stringsetSeedData);
  },
  post: async (): Promise<boolean> => {
    return await mockAgent.noreturnTimeout();
  },
  put: async (): Promise<boolean> => {
    return await mockAgent.noreturnTimeout();
  },
  delete: async (id: string): Promise<boolean> => {
    return await mockAgent.noreturnTimeout();
  },
};
