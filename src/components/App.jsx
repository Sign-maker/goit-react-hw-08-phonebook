import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container/Container.styled';
import { Title } from './Title/Title.styled';
import { Subtitle } from './Subtitle/Subtitle.styled';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
      <ToastContainer />
    </Container>
  );
};
