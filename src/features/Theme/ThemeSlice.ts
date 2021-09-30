import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  isDarkMode: boolean
}

const initialState: ThemeState = {
  isDarkMode: false,
}

const slice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {},
})

export default slice.reducer
