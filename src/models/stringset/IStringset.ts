import { ITextLocale } from "../ITextLocale";
import { IBrand } from "../brand/IBrand";

export interface IStringset {
  id: string;
  brand: IBrand;
  name: string;
  gauges: string;
  description?: ITextLocale[];
}
