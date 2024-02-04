import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filterSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { authSlice } from './auth/authSlice';

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedAuthSliceReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    [filterSlice.name]: filterSlice.reducer,
    [contactsSlice.name]: contactsSlice.reducer,
    [authSlice.name]: persistedAuthSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
