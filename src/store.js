import { configureStore } from '@reduxjs/toolkit'
import Reduxslice from './components/slice/Reduxslice'

export default configureStore({
  reducer: {
    counter:Reduxslice
  },
})