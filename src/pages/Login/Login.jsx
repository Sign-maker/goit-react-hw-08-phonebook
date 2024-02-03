import { useAuth } from 'hooks/useAuth';
import { toast } from 'react-toastify';

const Login = () => {
  const { logIn } = useAuth();

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    try {
      await logIn(formData);
      form.reset();
      toast(`Login was succesfull`);
    } catch (error) {
      toast.error(`Unable to login, wrong user params or server error`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        User email:
        <label>
          <input
            type="email"
            name="email"
            placeholder="user@mail.com"
            required
          />
        </label>
        <label>
          User password:
          <input
            type="password"
            name="password"
            minLength={7}
            placeholder="*******"
            autoComplete="off"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
