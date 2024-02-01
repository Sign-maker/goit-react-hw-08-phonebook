import { useState, useId } from 'react';
import { useContacts } from 'hooks/useContacts';
import { useFilter } from 'hooks/useFilter';
import { Button, Form, Input, Label } from './ContactForm.styled';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [adding, setAdding] = useState(false);

  const { contacts, addContact } = useContacts();
  const { setFilter } = useFilter();

  const nameInputId = useId();
  const telInputId = useId();

  const inputHandler = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value.trimStart());
        break;
      case 'number':
        setNumber(value.trimStart());
        break;
      default:
        return;
    }
  };

  const isInContacts = newName => {
    const newNameToLowerCase = newName.toLowerCase();

    return contacts.some(
      ({ name }) => name.toLowerCase() === newNameToLowerCase
    );
  };

  const onSubmitHandler = async event => {
    event.preventDefault();
    const contactData = { name: name.trimEnd(), phone: number.trimEnd() };

    if (isInContacts(contactData.name)) {
      return alert(`${contactData.name} is in contacts!`);
    }

    try {
      setAdding(true);
      await addContact(contactData);
      toast(`Contact ${name} added`);
    } catch (error) {
      toast.error(`Unable to add contact! ${error}`);
    } finally {
      setAdding(false);
    }

    setFilter('');
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        id={nameInputId}
        placeholder="Vasyl Pupkin"
        type="text"
        name="name"
        value={name}
        onChange={inputHandler}
        required
      />
      <Label htmlFor={telInputId}>Number</Label>
      <Input
        id={telInputId}
        placeholder="999111999"
        type="tel"
        name="number"
        value={number}
        onChange={inputHandler}
        required
      />
      <Button type="submit" disabled={!(name && number) || adding}>
        {adding ? 'Adding...' : 'Add contact'}
      </Button>
    </Form>
  );
};
