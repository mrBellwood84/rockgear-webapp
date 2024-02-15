import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBrand } from "../../../models/brand/IBrand";
import { BrandViewTypes } from "../../types/viewTypes";
import { sortByName } from "../../sortAlgoritms";

interface IBrandState {
  allBrands: IBrand[];
  brandsFiltered: IBrand[];
  selectedBrand: IBrand | null;
  currentBrandView: BrandViewTypes;
}

const initialState: IBrandState = {
  allBrands: [],
  brandsFiltered: [],
  selectedBrand: null,
  currentBrandView: "load",
};

export const brandStore = createSlice({
  name: "brand",
  initialState,
  reducers: {
    /** Set brand data in state. Replace whole data array! */
    addAllBrands: (state, action: PayloadAction<IBrand[]>) => {
      state.currentBrandView = "main";
      state.allBrands = action.payload;
      state.brandsFiltered = state.allBrands.sort(sortByName);
    },
    addSingleBrand: (state, action: PayloadAction<IBrand>) => {
      state.allBrands.push(action.payload);
      state.brandsFiltered = state.allBrands.sort(sortByName);
      state.currentBrandView = "main";
    },
    updateSingleBrand: (state, action: PayloadAction<IBrand>) => {
      state.allBrands = state.allBrands.map((brand) => {
        if (brand.id === action.payload.id) return action.payload;
        return brand;
      });
      state.brandsFiltered = state.allBrands.sort(sortByName);
      state.currentBrandView = "main";
    },
    removeSingleBrand: (state, action: PayloadAction<string>) => {
      state.allBrands = state.allBrands.filter((b) => b.id !== action.payload);
      state.brandsFiltered = state.allBrands.sort(sortByName);
    },

    filterBrands: (state, action: PayloadAction<string>) => {
      state.brandsFiltered = state.allBrands
        .filter((x) =>
          x.name.toLowerCase().includes(action.payload.toLowerCase())
        )
        .sort(sortByName);
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
      console.log("Edit clicked", state.currentBrandView);
    },
    /** Change brand view in accorance with provided view string */
    changeBrandView: (state, action: PayloadAction<BrandViewTypes>) => {
      state.currentBrandView = action.payload;
    },
  },
});
