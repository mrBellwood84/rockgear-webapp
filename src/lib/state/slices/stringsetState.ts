import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sortByBrandName, sortByName } from "../../sortAlgoritms";
import { BaseViewTypes } from "../../types/viewTypes";
import { IStringset } from "../../../models/stringset/IStringset";

interface IStringsetState {
  allData: IStringset[];
  filteredData: IStringset[];
  selected: IStringset | null;
  currentView: BaseViewTypes;
}

const initialState: IStringsetState = {
  allData: [],
  filteredData: [],
  selected: null,
  currentView: "load",
};

export const stringsetStore = createSlice({
  name: "stringset",
  initialState,
  reducers: {
    addAll: (state, action: PayloadAction<IStringset[]>) => {
      state.currentView = "all";
      state.allData = action.payload;
      state.filteredData = state.allData.sort(sortByName);
    },
    addSingle: (state, action: PayloadAction<IStringset>) => {
      state.allData.push(action.payload);
      state.filteredData = state.allData.sort(sortByName);
      state.currentView = "all";
    },
    updateSingle: (state, action: PayloadAction<IStringset>) => {
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
          const alt_1 = x.brand.name.toLowerCase();
          const alt_2 = x.name.toLowerCase();
          const alt_3 = x.gauges.toLocaleLowerCase();
          const alt_4 = `${alt_1} ${alt_2}`;
          const alt_5 = `${alt_1} ${alt_3}`;

          if (alt_1.includes(term)) return x;
          if (alt_2.includes(term)) return x;
          if (alt_3.includes(term)) return x;
          if (alt_4.includes(term)) return x;
          if (alt_5.includes(term)) return x;

          return undefined;
        })
        .sort(sortByBrandName);
    },

    displayAll: (state) => {
      state.currentView = "all";
      state.selected = null;
    },
    displayCreate: (state) => {
      state.currentView = "create";
      state.selected = null;
    },
    displaySingle: (state, action: PayloadAction<IStringset>) => {
      state.selected = action.payload;
      state.currentView = "single";
    },
    changeCurrentView: (state, action: PayloadAction<BaseViewTypes>) => {
      state.currentView = action.payload;
    },
  },
});
