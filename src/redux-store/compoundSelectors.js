import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contacts/contactsSelectors';
import { selectFilter } from './filter/filterSelectors';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    const filterToLowercase = filterValue.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowercase)
    );
  }
);
