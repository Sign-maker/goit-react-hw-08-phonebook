import { useAuth } from 'hooks/useAuth';

import { Button, Form, Input, message } from 'antd';
import Title from 'antd/es/typography/Title';
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  FormOutlined,
} from '@ant-design/icons';
import css from './Register.module.css';

const Register = () => {
  const { register, isAuthLoading } = useAuth();
  const [antForm] = Form.useForm();

  const onFinish = async formData => {
    try {
      await register(formData);
      antForm.resetFields();
      message.success(`Registration was succesfull`);
    } catch (error) {
      message.error(
        `Unable to register, user is already registered or server error`
      );
    }
  };

  return (
    <section className={css.section}>
      <div className="container">
        <Title className={css.title}>User registration</Title>
        <Form
          form={antForm}
          name="Register"
          autoComplete="off"
          onFinish={onFinish}
          layout="vertical"
          className={css.form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: 'Please input your name!' },
              {
                min: 3,
                message: 'Min langth=3',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Vasyl Smith" />
          </Form.Item>
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
              icon={<FormOutlined />}
              loading={isAuthLoading}
              block
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Register;
