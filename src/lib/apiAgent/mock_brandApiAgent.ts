import { IBrand } from "../../models/brand/IBrand";
import { mockAgent } from "./mockAgent";
import { brandSeedData } from "./seedDataCollection";

export const mock_brandagent = {
  getAll: async (): Promise<IBrand[]> => {
    return await mockAgent.getAllBrands(brandSeedData);
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
