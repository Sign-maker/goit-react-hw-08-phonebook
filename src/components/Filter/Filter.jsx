import { useFilter } from 'hooks/useFilter';

import { SearchOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import css from './Filter.module.css';

export const Filter = () => {
  const { setFilter } = useFilter();

  const handleChange = event => {
    const value = event.target.value.trimStart();
    setFilter(value);
  };

  return (
    <Form
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
