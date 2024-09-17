import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
    
      state.value += 1;
    },
    decrement: (state) => {
        if(state.value > 1){

            state.value -= 1;
        }
    },
   
  },
})


export const { increment, decrement  } = reduxSlice.actions

export default reduxSlice.reducer