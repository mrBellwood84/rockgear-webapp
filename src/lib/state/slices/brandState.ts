import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBrand } from "../../../models/brand/IBrand";
import { BrandViewTypes } from "../../types/viewTypes";
import { sortByName } from "../../sortAlgoritms";

interface IBrandState {
  brands: IBrand[];
  selectedBrand: IBrand | null;
  currentBrandView: BrandViewTypes;
}

const initialState: IBrandState = {
  brands: [],
  selectedBrand: null,
  currentBrandView: "load",
};

export const brandStore = createSlice({
  name: "brand",
  initialState,
  reducers: {
    /** Set brand data in state. Replace whole data array! */
    setBrandData: (state, action: PayloadAction<IBrand[]>) => {
      state.currentBrandView = "main";
      state.brands = action.payload.sort(sortByName);
    },
    /** Set current view to main. Selected brand is set to null */
    displayBrandViewMain: (state) => {
      state.currentBrandView = "main";
      state.selectedBrand = null;
    },
    /** Set current view to create. Sets selected brand to null */
    displayCreateBrandView: (state) => {
      state.currentBrandView = "create";
      state.selectedBrand = null;
    },
    /** Sets current view to edit. Require a selected brand to edit */
    displayEditBrand: (state, action: PayloadAction<IBrand>) => {
      state.selectedBrand = action.payload;
      state.currentBrandView = "edit";
    },
    /** Change brand view in accorance with provided view string */
    changeBrandView: (state, action: PayloadAction<BrandViewTypes>) => {
      state.currentBrandView = action.payload;
    },
  },
});
