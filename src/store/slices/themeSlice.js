import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    selectedTheme: 'DARK',
  },
  reducers: {
    changeTheme: (state, action) => {
      state.selectedTheme = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer