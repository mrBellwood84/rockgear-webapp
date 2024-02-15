import { IBrand } from "../../models/brand/IBrand";
import { mockAgent } from "./mockAgent";
import { brandSeedData } from "./seedDataCollection";

export const brandApiAgent = {
  getAll: async (): Promise<IBrand[]> => {
    return await mockAgent.getAll(brandSeedData);
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
