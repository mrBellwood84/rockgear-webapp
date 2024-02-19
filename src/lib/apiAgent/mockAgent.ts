import { IBrand } from "../../models/brand/IBrand";
import { IGuitar } from "../../models/guitar/IGuitar";
import { IStringset } from "../../models/stringset/IStringset";

export const mockAgent = {
  getAllBrands: (data: IBrand[]): Promise<IBrand[]> => {
    const timeout = Math.random() * 2000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, timeout);
    });
  },
  getAllGuitars: (data: IGuitar[]): Promise<IGuitar[]> => {
    const timeout = Math.random() * 2000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, timeout);
    });
  },
  getAllStringsets: (data: IStringset[]): Promise<IStringset[]> => {
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
