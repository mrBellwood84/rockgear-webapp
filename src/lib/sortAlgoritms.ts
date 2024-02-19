import { IBrand } from "../models/brand/IBrand";
import { IGuitar } from "../models/guitar/IGuitar";
import { IStringset } from "../models/stringset/IStringset";

type SortByNameTypes = IBrand | IStringset;
type SortByBrandNameTypes = IGuitar | IStringset;

export const sortByName = (a: SortByNameTypes, b: SortByNameTypes) => {
  if (a.name > b.name) return 1;
  return -1;
};

export const sortByBrandName = (
  a: SortByBrandNameTypes,
  b: SortByBrandNameTypes
) => {
  if (a.brand.name > b.brand.name) return 1;
  return -1;
};
