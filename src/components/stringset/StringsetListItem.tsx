import { useAppSelector, useAppDispatch } from "../../lib/state/hooks";
import { stringsetStore } from "../../lib/state/slices/stringsetState";
import { IStringset } from "../../models/stringset/IStringset";
import { ListItemBase } from "../ListItemBase";

interface IProps {
  stringset: IStringset;
}

export const StringsetListItem = ({ stringset }: IProps) => {
  const isAdmin = useAppSelector((state) => state.user.userRole) === "admin";
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(stringsetStore.actions.displaySingle(stringset));
  };

  const primary = `${stringset.brand.name}, ${stringset.name}`;

  return (
    <ListItemBase
      primary={primary}
      secondary={stringset.gauges}
      allowAction={isAdmin}
    />
  );
};
