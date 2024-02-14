import { IBrand } from "../../models/brand/IBrand";
import { mockAgent } from "./mockAgent";
import { brandSeedData } from "./seedDataCollection";

export const brandApiAgent = {
  getAll: async (): Promise<IBrand[]> => {
    return await mockAgent.getAll(brandSeedData);
  },
};
