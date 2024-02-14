import { IBrand } from "../../../models/brand/IBrand";
import { CardsViewBox } from "../../../components/CardsViewBox";
import { BrandCard } from "../../../components/brand/BrandCard";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { sortByName } from "../../../lib/sortAlgoritms";
import { useAppSelector } from "../../../lib/state/hooks";

export const BrandViewAll = () => {
  const allBrands = useAppSelector((state) => state.brand.brands);
  const [dataArr, setDataArr] = useState<IBrand[]>(allBrands);
  const { t } = useTranslation();

  const filterDataArr = (event: ChangeEvent<HTMLInputElement>) => {
    const searchStr = event.currentTarget.value.toLowerCase();
    const filtered = allBrands
      .filter((x) => x.name.toLowerCase().includes(searchStr))
      .sort(sortByName);
    setDataArr(() => filtered);
  };

  const createClick = () => {
    console.warn("DEV :: Create button not implemented");
  };

  return (
    <CardsViewBox
      title={t("data.brandPlural")}
      searchFieldChange={filterDataArr}
      addButtonClick={createClick}
    >
      {dataArr.map((b) => (
        <BrandCard key={b.id} brand={b} />
      ))}
    </CardsViewBox>
  );
};
