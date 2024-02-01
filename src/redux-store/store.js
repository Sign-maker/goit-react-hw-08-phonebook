import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filterSlice';
import { contactsSlice } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    [filterSlice.name]: filterSlice.reducer,
    [contactsSlice.name]: contactsSlice.reducer,
  },
});
