import { CardsViewBox } from "../../../components/CardsViewBox";
import { BrandCard } from "../../../components/brand/BrandCard";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { brandStore } from "../../../lib/state/slices/brandState";

export const BrandViewAllPage = () => {
  const brandsFiltered = useAppSelector((state) => state.brand.brandsFiltered);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const filterDataArr = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(brandStore.actions.filterBrands(event.currentTarget.value));

  const createClick = () =>
    dispatch(brandStore.actions.displayCreateBrandView());

  return (
    <CardsViewBox
      title={t("data.brandPlural")}
      searchFieldChange={filterDataArr}
      addButtonClick={createClick}
    >
      {brandsFiltered.map((b) => (
        <BrandCard key={b.id} brand={b} />
      ))}
    </CardsViewBox>
  );
};
