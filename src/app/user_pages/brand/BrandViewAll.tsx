import { CardBox } from "../../../components/CardBox";
import { BrandCard } from "../../../components/brand/BrandCard";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { brandStore } from "../../../lib/state/slices/brandState";

export const BrandViewAll = () => {
  const brandsFiltered = useAppSelector((state) => state.brand.filteredData);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const filterDataArr = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(brandStore.actions.filter(event.currentTarget.value));

  const createClick = () => dispatch(brandStore.actions.displayCreate());

  return (
    <CardBox
      title={t("data.brandPlural")}
      searchFieldChange={filterDataArr}
      addButtonClick={createClick}
    >
      {brandsFiltered.map((b) => (
        <BrandCard key={b.id} brand={b} />
      ))}
    </CardBox>
  );
};
