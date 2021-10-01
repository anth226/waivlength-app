import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import {
  persistCombineReducers,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createTransform,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

// reducers
import AuthUser from '../features/AuthUser/AuthUserSlice'
import Theme from '../features/Theme/ThemeSlice'
import Signup from '../features/Signup/SignupSlice'

import constants from '../common/utils/constants'

const transform = createTransform(
  (inboundState, key) => {
    return inboundState
  },
  (outboundState, key) => {
    return JSON.parse(outboundState as string)
  },
)

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['signup'],
  transforms: [transform],
}

const persistedReducer = persistCombineReducers(persistConfig, {
  authUser: AuthUser,
  theme: Theme,
  signup: Signup,
})

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: constants.nodeEnv === 'development',
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
