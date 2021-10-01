/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SignupState {
  email: string
  phoneCode: string
  phoneNumber: string
  verification: string[]
  password: string
}

const initialState: SignupState = {
  email: '',
  phoneCode: '',
  phoneNumber: '',
  verification: [],
  password: '',
}

const slice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    onVerificationChange(
      state,
      action: PayloadAction<{ value: string; index: number }>,
    ) {
      const { value, index } = action.payload
      if (value) {
        state.verification.push(value)
      } else {
        const { verification } = state
        verification.splice(index, 1)
        state.verification = verification
      }
    },
  },
})

export const { onVerificationChange } = slice.actions

export default slice.reducer
