import { Fragment, useState } from "react";
import { getLocaleText } from "../../lib/locale/getTextLocale";
import { useAppDispatch, useAppSelector } from "../../lib/state/hooks";
import { brandStore } from "../../lib/state/slices/brandState";
import { IBrand } from "../../models/brand/IBrand";
import { ListItemBase } from "../ListItemBase";
import { DeleteConfirmDialog } from "../DeleteConfirmDialog";
import { IDeleteDto } from "../../models/IDeleteDto";
import { brandApiAgent } from "../../lib/apiAgent/brandApiAgent";
import { ListItemLoader } from "../ListItemLoader";

interface IProps {
  brand: IBrand;
}

export const BrandListItem = ({ brand }: IProps) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [apiLoading, setApiLoading] = useState<boolean>(false);

  const isAdmin = useAppSelector((state) => state.user.userRole) === "admin";
  const lang = useAppSelector((state) => state.settings.languageSelected);
  const dispatch = useAppDispatch();

  const handleEditClick = () =>
    dispatch(brandStore.actions.displaySingle(brand));

  const openDeleteDialog = () => setDeleteDialogOpen(true);
  const closeDeleteDialog = () => setDeleteDialogOpen(false);

  const deleteItem = async () => {
    setApiLoading(true);
    setDeleteDialogOpen(false);
    const deleteDto: IDeleteDto = {
      id: brand.id,
    };

    const response = await brandApiAgent.delete(deleteDto);

    if (response.success) {
      dispatch(brandStore.actions.removeSingle(brand.id));
      return;
    }

    setApiLoading(false);
  };

  return (
    <Fragment>
      <DeleteConfirmDialog
        open={deleteDialogOpen}
        itemName={brand.name}
        cancelClick={closeDeleteDialog}
        confirmClick={deleteItem}
      />

      {!apiLoading && (
        <ListItemBase
          primary={brand.name}
          secondary={brand.notes && getLocaleText(lang, brand.notes)}
          allowAction={isAdmin}
          clickSelect={handleEditClick}
          clickDelete={openDeleteDialog}
        />
      )}

      {apiLoading && <ListItemLoader primary={brand.name} />}
    </Fragment>
  );
};
