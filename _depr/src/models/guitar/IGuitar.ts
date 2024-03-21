import { ITextLocale } from "../ITextLocale";
import { IBrand } from "../brand/IBrand";

export interface IGuitar {
  id: string;
  brand: IBrand;
  model: string;
  serialNumber: string;
  nickname?: string;
  description?: ITextLocale[];
}
