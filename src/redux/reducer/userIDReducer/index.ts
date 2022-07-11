import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserIDType {
  usersId: any;
}

const initialState: UserIDType = {
  usersId: {
    givePoint: 0,
  },
};

const userIDSlice = createSlice({
  name: "usersId",
  initialState,
  reducers: {
    getUserIDSuccess(state: UserIDType, action: PayloadAction<any>) {
      state.usersId = action.payload;
    },
  },
});

// Actions
export const { getUserIDSuccess } = userIDSlice.actions;

export default userIDSlice.reducer;
