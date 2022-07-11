import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserType {
  users: any
}

const initialState: UserType = {
  users: null
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUserSuccess(
      state: UserType,
      action: PayloadAction<any>
    ) {
      state.users = action.payload
    },
  },
})

// Actions
export const {
  getUserSuccess
} = userSlice.actions

export default userSlice.reducer
