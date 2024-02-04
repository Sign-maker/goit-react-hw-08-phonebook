import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import { Button, Form, Input, message } from 'antd';
import Title from 'antd/es/typography/Title';
import { LockOutlined, LoginOutlined, MailOutlined } from '@ant-design/icons';
import css from './Login.module.css';

const Login = () => {
  const { logIn, isAuthLoading } = useAuth();
  const [antForm] = Form.useForm();

  const onFinish = async formData => {
    try {
      await logIn(formData);
      antForm.resetFields();
      message.success(`Login was succesfull`);
    } catch (error) {
      message.error(`Unable to login, wrong user params or server error`);
    }
  };

  return (
    <section className={css.section}>
      <div className="container">
        <Title className={css.title}>User login</Title>
        <Form
          form={antForm}
          name="Login"
          autoComplete="off"
          onFinish={onFinish}
          layout="vertical"
          className={css.form}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              {
                type: 'email',
                message: 'The input is not valid E-mail! user@mail.com',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              type="email"
              placeholder="user@mail.com"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 6, message: 'Min lenght=6' },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="*******" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              icon={<LoginOutlined />}
              loading={isAuthLoading}
            >
              Login
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
