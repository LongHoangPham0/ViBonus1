import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TransactionsType {
  Transactions: any
}

const initialState: TransactionsType = {
    Transactions: null
}

const Transactionsslice = createSlice({
  name: 'Transactions',
  initialState,
  reducers: {
    getTransactionssuccess(
      state: TransactionsType,
      action: PayloadAction<any>
    ) {
      state.Transactions = action.payload
    },
  },
})

// Actions
export const {
    getTransactionssuccess
} = Transactionsslice.actions

export default Transactionsslice.reducer
