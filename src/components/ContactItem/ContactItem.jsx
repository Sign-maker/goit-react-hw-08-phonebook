import { useState } from 'react';
import { Button, ContactInfo, Item } from './ContactItem.styled';
import { useContacts } from 'hooks/useContacts';
import { toast } from 'react-toastify';

export const ContactItem = ({ id, name, number }) => {
  const { deleteContact } = useContacts();
  const [deleting, setDeleting] = useState(false);

  const handleClick = async () => {
    try {
      setDeleting(true);
      await deleteContact(id);
      toast(`Contact ${name} deleted`);
    } catch (error) {
      console.log(error);
      toast.error(`Unable to delete! ${error}`);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Item>
      <ContactInfo>
        <span>{name}</span>
        <span>{number}</span>
      </ContactInfo>
      <Button type="button" disabled={deleting} onClick={handleClick}>
        {deleting ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
};
