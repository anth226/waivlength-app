import { createSlice } from '@reduxjs/toolkit'

interface AuthUserState {
  token: string | null
  profile: {
    firstName: string
    lastName: string
    email: string
  }
}

const initialState: AuthUserState = {
  token: null,
  profile: {
    firstName: '',
    lastName: '',
    email: '',
  },
}

const slice = createSlice({
  name: 'AuthUser',
  initialState,
  reducers: {},
})

export default slice.reducer
