import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PostCategoryType {
  postCategories: any
}

const initialState: PostCategoryType = {
  postCategories: null
}

const postCategorySlice = createSlice({
  name: 'postCategories',
  initialState,
  reducers: {
    getPostCategorySuccess(
      state: PostCategoryType,
      action: PayloadAction<any>
    ) {
      state.postCategories = action.payload
    },
  },
})

// Actions
export const {
  getPostCategorySuccess
} = postCategorySlice.actions

export default postCategorySlice.reducer
