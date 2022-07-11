import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TopReceiverType {
  receivers: any
}

const initialState: TopReceiverType = {
    receivers: null
}

const topReceiverSlice = createSlice({
  name: 'receivers',
  initialState,
  reducers: {
    getTopReceiverSuccess(
      state: TopReceiverType,
      action: PayloadAction<any>
    ) {
      state.receivers = action.payload
    },
  },
})

// Actions
export const {
    getTopReceiverSuccess
} = topReceiverSlice.actions

export default topReceiverSlice.reducer
