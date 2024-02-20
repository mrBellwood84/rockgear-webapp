import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BaseViewTypes } from "../../types/viewTypes";
import { sortByBrandName } from "../../sortAlgoritms";
import { IGuitar } from "../../../models/guitar/IGuitar";

interface IGuitarState {
  allData: IGuitar[];
  filteredData: IGuitar[];
  selected: IGuitar | null;
  currentView: BaseViewTypes;
}

const initialState: IGuitarState = {
  allData: [],
  filteredData: [],
  selected: null,
  currentView: "load",
};

export const guitarStore = createSlice({
  name: "guitars",
  initialState,
  reducers: {
    addAll: (state, action: PayloadAction<IGuitar[]>) => {
      state.currentView = "all";
      state.allData = action.payload;
      state.filteredData = state.allData.sort(sortByBrandName);
    },
    addSingle: (state, action: PayloadAction<IGuitar>) => {
      state.allData.push(action.payload);
      state.filteredData = state.allData.sort(sortByBrandName);
      state.currentView = "all";
    },
    updateSingle: (state, action: PayloadAction<IGuitar>) => {
      state.allData = state.allData.map((brand) => {
        if (brand.id === action.payload.id) return action.payload;
        return brand;
      });
      state.filteredData = state.allData.sort(sortByBrandName);
      state.currentView = "all";
    },
    removeSingle: (state, action: PayloadAction<string>) => {
      state.allData = state.allData.filter((b) => b.id !== action.payload);
      state.filteredData = state.allData.sort(sortByBrandName);
    },

    filter: (state, action: PayloadAction<string>) => {
      state.filteredData = state.allData
        .filter((x) => {
          const term = action.payload.toLowerCase();

          const alt_1 = x.brand.name.toLowerCase();
          const alt_2 = x.model.toLowerCase();
          const alt_3 = x.nickname ? x.nickname.toLowerCase() : "";
          const alt_4 = x.serialNumber.toLowerCase();
          const alt_5 = `${alt_1} ${alt_2}`;

          if (alt_1.includes(term)) return x;
          if (alt_2.includes(term)) return x;
          if (alt_3.includes(term)) return x;
          if (alt_4.includes(term)) return x;
          if (alt_5.includes(term)) return x;

          return null;
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
    displaySingle: (state, action: PayloadAction<IGuitar>) => {
      state.selected = action.payload;
      state.currentView = "single";
    },
    changeCurrentView: (state, action: PayloadAction<BaseViewTypes>) => {
      state.currentView = action.payload;
    },
  },
});
