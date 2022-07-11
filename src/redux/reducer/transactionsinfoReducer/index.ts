import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TransactionsinfoType {
  Transactionsinfo: any
}

const initialState: TransactionsinfoType = {
    Transactionsinfo: null
}

const Transactionsinfoslice = createSlice({
  name: 'Transactionsinfo',
  initialState,
  reducers: {
    getTransactionsinfosuccess(
      state: TransactionsinfoType,
      action: PayloadAction<any>
    ) {
      state.Transactionsinfo = action.payload
    },
  },
})

// Actions
export const {
    getTransactionsinfosuccess
} = Transactionsinfoslice.actions

export default Transactionsinfoslice.reducer
