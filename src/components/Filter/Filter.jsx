import { useEffect } from 'react';
import { useFilter } from 'hooks/useFilter';

import { SearchOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import css from './Filter.module.css';

export const Filter = () => {
  const { filterValue, setFilter } = useFilter();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      filter: filterValue,
    });
  }, [filterValue, form]);

  const handleChange = event => {
    const value = event.target.value.trimStart();
    setFilter(value);
  };

  return (
    <Form
      form={form}
      name="Filter"
      autoComplete="off"
      layout="vertical"
      className={css.form}
    >
      <Form.Item label="Search" name="filter">
        <Input prefix={<SearchOutlined />} onChange={handleChange} />
      </Form.Item>
    </Form>
  );
};
