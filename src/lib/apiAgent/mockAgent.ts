import { IBrand } from "../../models/brand/IBrand";

type MockAgentGetAllType = IBrand[];

export const mockAgent = {
  getAll: (data: MockAgentGetAllType): Promise<MockAgentGetAllType> => {
    const timeout = Math.random() * 2000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, timeout);
    });
  },
};
