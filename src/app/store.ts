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
import storage from 'redux-persist/lib/storage'

// reducers
import AuthUser from '../features/AuthUser/AuthUserSlice'
import Theme from '../features/Theme/ThemeSlice'

import constants from '../common/utils/constants'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistCombineReducers(persistConfig, {
  authUser: AuthUser,
  theme: Theme,
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
