import { createSlice } from '@reduxjs/toolkit'

export const reduxslice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      
      state.value += 1
    },
    decrement: (state) => {
      if(state.value > 1){
         state.value -= 1
      }else{

      }
      
    },
   
  },
})

export const { increment, decrement,  } = reduxslice.actions

export default reduxslice.reducer