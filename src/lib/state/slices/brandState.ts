import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBrand } from "../../../models/brand/IBrand";
import { sortByName } from "../../sortAlgoritms";
import { BaseViewTypes } from "../../types/viewTypes";

interface IBrandState {
  allData: IBrand[];
  filteredData: IBrand[];
  selected: IBrand | null;
  currentView: BaseViewTypes;
}

const initialState: IBrandState = {
  allData: [],
  filteredData: [],
  selected: null,
  currentView: "load",
};

export const brandStore = createSlice({
  name: "brand",
  initialState,
  reducers: {
    addAll: (state, action: PayloadAction<IBrand[]>) => {
      state.currentView = "all";
      state.allData = action.payload;
      state.filteredData = state.allData.sort(sortByName);
    },
    addSingle: (state, action: PayloadAction<IBrand>) => {
      state.allData.push(action.payload);
      state.filteredData = state.allData.sort(sortByName);
      state.currentView = "all";
    },
    updateSingle: (state, action: PayloadAction<IBrand>) => {
      state.allData = state.allData.map((brand) => {
        if (brand.id === action.payload.id) return action.payload;
        return brand;
      });
      state.filteredData = state.allData.sort(sortByName);
      state.currentView = "all";
    },
    removeSingle: (state, action: PayloadAction<string>) => {
      state.allData = state.allData.filter((b) => b.id !== action.payload);
      state.filteredData = state.allData.sort(sortByName);
    },

    filter: (state, action: PayloadAction<string>) => {
      state.filteredData = state.allData
        .filter((x) => {
          const term = action.payload.toLowerCase();
          const alt_1 = x.name.toLowerCase();
          if (alt_1.includes(term)) return x;
          return null;
        })
        .sort(sortByName);
    },

    /** Set current view to all. Selected brand is set to null */
    displayAll: (state) => {
      state.currentView = "all";
      state.selected = null;
    },
    /** Set current view to create. Sets selected brand to null */
    displayCreate: (state) => {
      state.currentView = "create";
      state.selected = null;
    },
    /** Sets current view to edit. Require a selected brand to edit */
    displaySingle: (state, action: PayloadAction<IBrand>) => {
      state.selected = action.payload;
      state.currentView = "edit";
    },
    /** Change brand view in accorance with provided view string */
    changeCurrentView: (state, action: PayloadAction<BaseViewTypes>) => {
      state.currentView = action.payload;
    },
  },
});
