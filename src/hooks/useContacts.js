import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from 'redux-store/contacts/contactsSelectors';
import * as operations from 'redux-store/contacts/contactsOperations';
import { useCallback } from 'react';
import { selectFilteredContacts } from 'redux-store/compoundSelectors';

export const useContacts = () => {
  const dispatch = useDispatch();

  const fetchContacts = useCallback(
    () => dispatch(operations.fetchContacts()),
    [dispatch]
  );
  const addContact = contact =>
    dispatch(operations.addContact(contact)).unwrap();
  const deleteContact = id => dispatch(operations.deleteContact(id)).unwrap();

  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return {
    fetchContacts,
    addContact,
    deleteContact,
    isLoading,
    contacts,
    filteredContacts,
  };
};
