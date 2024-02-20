import { IGuitar } from "../../models/guitar/IGuitar";
import { CardBase } from "../CardBase";
import { getLocaleText } from "../../lib/locale/getTextLocale";
import { useAppSelector } from "../../lib/state/hooks";

interface IProps {
  guitar: IGuitar;
}

export const GuitarCard = ({ guitar }: IProps) => {
  const lang = useAppSelector((state) => state.settings.languageSelected);

  const mainTitle = `${guitar.brand.name} ${guitar.model}`;
  const secondTitle = guitar.nickname ? guitar.nickname : "";

  return (
    <CardBase
      largeTitle={mainTitle}
      smallTitle={secondTitle}
      text={guitar.description && getLocaleText(lang, guitar.description)}
    />
  );
};
