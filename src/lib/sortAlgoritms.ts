import { IBrand } from "../models/brand/IBrand";

type SortByNameTypes = IBrand;

export const sortByName = (a: SortByNameTypes, b: SortByNameTypes) => {
  if (a.name > b.name) return 1;
  return -1;
};
