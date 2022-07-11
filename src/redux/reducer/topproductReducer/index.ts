import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TopProductsType {
  products: any
}

const initialState: TopProductsType = {
    products: null
}

const topproductslice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getTopproductsuccess(
      state: TopProductsType,
      action: PayloadAction<any>
    ) {
      state.products = action.payload
    },
  },
})

// Actions
export const {
    getTopproductsuccess
} = topproductslice.actions

export default topproductslice.reducer
