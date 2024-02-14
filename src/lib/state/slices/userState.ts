import { createSlice } from "@reduxjs/toolkit";
import { UserRoleType } from "../../types/userTypes";

interface IUserState {
  userRole: UserRoleType;
}

const initialState: IUserState = {
  userRole: "admin",
};

export const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
