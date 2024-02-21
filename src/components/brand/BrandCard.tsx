import { getLocaleText } from "../../lib/locale/getTextLocale";
import { useAppSelector } from "../../lib/state/hooks";
import { IBrand } from "../../models/brand/IBrand";
import { CardBase } from "../CardBase";

interface IProps {
  brand: IBrand;
}

export const BrandCard = ({ brand }: IProps) => {
  const lang = useAppSelector((state) => state.settings.languageSelected);

  return (
    <CardBase
      largeTitle={brand.name}
      text={brand.description && getLocaleText(lang, brand.description)}
    />
  );
};
