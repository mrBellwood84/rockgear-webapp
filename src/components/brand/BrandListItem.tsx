import { useAppDispatch, useAppSelector } from "../../lib/state/hooks";
import { brandStore } from "../../lib/state/slices/brandState";
import { IBrand } from "../../models/brand/IBrand";
import { ListItemBase } from "../ListItemBase";

interface IProps {
  brand: IBrand;
}

export const BrandListItem = ({ brand }: IProps) => {
  const isAdmin = useAppSelector((state) => state.user.userRole) === "admin";
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(brandStore.actions.displaySingle(brand));

  return (
    <ListItemBase
      primary={brand.name}
      allowClick={isAdmin}
      onClick={handleClick}
    />
  );
};
