import { IStringset } from "../../models/stringset/IStringset";
import { CardBase } from "../CardBase";

interface IProps {
  stringset: IStringset;
}

export const StringsetCard = ({ stringset }: IProps) => {
  return (
    <CardBase
      largeTitle={stringset.brand.name}
      smallTitle={stringset.name}
      text={stringset.gauges}
    />
  );
};
