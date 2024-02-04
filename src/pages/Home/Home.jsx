import { Typography } from 'antd';
import { useAuth } from 'hooks/useAuth';
import css from './Home.module.css';

const { Title, Text } = Typography;

const Home = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <section className={css.homeSection}>
      <div className="container">
        <Title>Phonebook application</Title>
        <Text>
          Welcome to test phonebook application
          {isLoggedIn
            ? `, ${user.name.toUpperCase()}!`
            : '! Please login or register to start using it.'}
        </Text>
      </div>
    </section>
  );
};

export default Home;
