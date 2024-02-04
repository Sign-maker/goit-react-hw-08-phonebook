import React from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Typography } from 'antd';
import css from './Contacts.module.css';

const { Title } = Typography;

const Contacts = () => {
  return (
    <section className={css.section}>
      <div className="container">
        <Title className={css.title}>Phonebook</Title>
        <ContactForm />
        <Title level={2} className={css.title}>
          Contacts
        </Title>
        <Filter />
        <ContactList />
      </div>
    </section>
  );
};

export default Contacts;
