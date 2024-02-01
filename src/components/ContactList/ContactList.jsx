import { useEffect } from 'react';
import { useContacts } from 'hooks/useContacts';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { Info } from 'components/Info/Info.styled';

export const ContactList = () => {
  const { fetchContacts, filteredContacts, isLoading } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      {isLoading && <Info>Loading...</Info>}
      {filteredContacts.length > 0 && (
        <List>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} number={phone} />
          ))}
        </List>
      )}
      {!isLoading && filteredContacts.length <= 0 && (
        <Info>There are no contacts</Info>
      )}
    </>
  );
};
