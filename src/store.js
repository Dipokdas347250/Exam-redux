import { configureStore } from '@reduxjs/toolkit'
import  reduxslice  from './components/slice/Reduxslice'

export default configureStore({
  reducer: {
    counter:reduxslice
  },
})