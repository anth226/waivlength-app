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
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

// reducers
import AuthUser from '../features/AuthUser/AuthUserSlice'

import constants from '../common/utils/constants'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}

const persistedReducer = persistCombineReducers(persistConfig, {
  authUser: AuthUser,
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
