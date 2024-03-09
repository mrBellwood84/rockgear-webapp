import { useAppDispatch } from "../../lib/state/hooks";
import { guitarStore } from "../../lib/state/slices/guitarState";
import { IGuitar } from "../../models/guitar/IGuitar";
import { ListItemBase } from "../ListItemBase";

interface IProps {
  guitar: IGuitar;
}

export const GuitarListItem = ({ guitar }: IProps) => {
  const dispatch = useAppDispatch();

  const handleEditClick = () =>
    dispatch(guitarStore.actions.displaySingle(guitar));

  const primary = `${guitar.brand.name} ${guitar.model}`;

  return (
    <ListItemBase
      primary={primary}
      secondary={guitar.nickname}
      allowAction={true}
    />
  );
};
