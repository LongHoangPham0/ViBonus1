import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TagType {
  tags: any
}

const initialState: TagType = {
  tags: null
}

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    getTagSuccess(
      state: TagType,
      action: PayloadAction<any>
    ) {
      state.tags = action.payload
    },
  },
})

// Actions
export const {
  getTagSuccess
} = tagSlice.actions

export default tagSlice.reducer
