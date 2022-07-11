import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RewardType {
  rewards: any
}

const initialState: RewardType = {
  rewards: null
}

const RewardSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    getRewardSuccess(
      state: RewardType,
      action: PayloadAction<any>
    ) {
      state.rewards = action.payload
    },
    putRewardSuccess(
      state: RewardType,
      action: PayloadAction<any>
    ) {
      state.rewards = action.payload
    },
    
  },
})

// Actions
export const {
  getRewardSuccess,
putRewardSuccess
} = RewardSlice.actions

export default RewardSlice.reducer
