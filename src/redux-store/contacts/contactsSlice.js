import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    //fetch
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    });
    builder.addCase(fetchContacts.rejected, handleRejected);
    //add
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(payload);
    });
    builder.addCase(addContact.rejected, handleRejected);
    //del
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.isLoading = false;
      state.error = null;
      state.items.splice(index, 1);
    });
    builder.addCase(deleteContact.rejected, handleRejected);
  },
});
