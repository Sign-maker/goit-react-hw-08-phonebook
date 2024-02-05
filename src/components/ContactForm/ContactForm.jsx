import { useState } from 'react';
import { useContacts } from 'hooks/useContacts';
import { useFilter } from 'hooks/useFilter';

import { Button, Form, Input, message } from 'antd';
import {
  UserOutlined,
  PhoneOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [adding, setAdding] = useState(false);
  const [antForm] = Form.useForm();

  const { contacts, addContact } = useContacts();
  const { setFilter } = useFilter();

  const isInContacts = newName => {
    const newNameToLowerCase = newName.toLowerCase();

    return contacts.some(
      ({ name }) => name.toLowerCase() === newNameToLowerCase
    );
  };

  const onSubmitHandler = async ({ name, number }) => {
    const contactData = { name: name.trimEnd(), number: number.trimEnd() };

    if (isInContacts(contactData.name)) {
      return message.error(`${contactData.name} is in contacts!`);
    }

    try {
      setAdding(true);
      await addContact(contactData);
      message.success(`Contact ${name} added`);
      antForm.resetFields();
      setFilter('');
    } catch (error) {
      message.error(`Unable to add contact! ${error}`);
    } finally {
      setAdding(false);
    }
  };

  return (
    <Form
      form={antForm}
      name="Contact"
      autoComplete="off"
      onFinish={onSubmitHandler}
      layout="vertical"
      className={css.form}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          { required: true, message: 'Please input contact name!' },
          { min: 3, message: 'Min lenght=3' },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Vasyl Smith" />
      </Form.Item>
      <Form.Item
        label="Number"
        name="number"
        rules={[{ required: true, message: 'Please input phone number!' }]}
      >
        <Input
          type="tel"
          prefix={<PhoneOutlined />}
          placeholder="38999999999"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          icon={<UserAddOutlined />}
          loading={adding}
          htmlType="submit"
          block
        >
          AddContact
        </Button>
      </Form.Item>
    </Form>
  );
};
