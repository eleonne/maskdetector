import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/themeSlice'

export default configureStore({
  reducer: {
    theme: themeSlice,
  },
})