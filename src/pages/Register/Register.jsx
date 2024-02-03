import { useAuth } from 'hooks/useAuth';
import { toast } from 'react-toastify';

const Register = () => {
  const { register } = useAuth();

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    try {
      await register(formData);
      form.reset();
      toast(`Registration was succesfull`);
    } catch (error) {
      toast.error(
        `Unable to register, user is already registered or server error`
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          User name:
          <input
            type="text"
            name="name"
            minLength={3}
            placeholder="User name"
            required
          />
        </label>
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
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
