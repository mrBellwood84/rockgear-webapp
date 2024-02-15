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
  noreturnTimeout: (): Promise<boolean> => {
    const timeout = Math.random() * 2000;
    const success = Math.round(Math.random() * 100) > 10;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(success);
      }, timeout);
    });
  },
};
