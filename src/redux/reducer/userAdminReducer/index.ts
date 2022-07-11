import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostType {
  users: any;
}

const initialState: PostType = {
  users: [""],
};

const userAdminReducer = createSlice({
  name: "userAdmin",
  initialState,
  reducers: {
    getUserAdminSuccess(state: PostType, action: PayloadAction<any>) {
      state.users = action.payload;
    },
  },
});

// Actions
export const { getUserAdminSuccess } = userAdminReducer.actions;

export default userAdminReducer.reducer;
