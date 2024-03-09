import { IGuitar } from "../../models/guitar/IGuitar";
import { mockAgent } from "./mockAgent";
import { guitarSeedData } from "./seedDataCollection";

export const GuitarApiAgent = {
  getAll: async (): Promise<IGuitar[]> => {
    return await mockAgent.getAllGuitars(guitarSeedData);
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
