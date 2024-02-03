import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Subtitle } from 'components/Subtitle/Subtitle.styled';
import { Title } from 'components/Title/Title.styled';
import React from 'react';

const Contacts = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
