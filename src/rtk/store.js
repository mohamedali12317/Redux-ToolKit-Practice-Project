import { configureStore } from '@reduxjs/toolkit'

import bankSlice from './Slice/bank-Slice'
import ProudctReducer from './Slice/Proudct-slice'

export const store = configureStore({
  reducer: {
    bank : bankSlice , // like bank reducer 
    // products : ProudctReducer // like bank reducer 
    products: ProudctReducer, // قم بتحديث هذا السطر
  },
})

