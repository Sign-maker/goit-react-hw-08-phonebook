import { useState } from 'react';
import { useContacts } from 'hooks/useContacts';

import { Button, Card, List, Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const ContactItem = ({ id, name, number }) => {
  const { deleteContact } = useContacts();
  const [deleting, setDeleting] = useState(false);

  const handleClick = async () => {
    try {
      setDeleting(true);
      await deleteContact(id);
      message.success(`Contact ${name} deleted`);
    } catch (error) {
      message.error(`Unable to delete! ${error}`);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <List.Item>
      <Card
        actions={[
          <Popconfirm
            title="Delete the contact"
            description="Are you sure to delete this contact?"
            onConfirm={handleClick}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              htmlType="submit"
              icon={<DeleteOutlined />}
              loading={deleting}
            ></Button>
          </Popconfirm>,
        ]}
      >
        <Card.Meta title={name} description={number}></Card.Meta>
      </Card>
    </List.Item>
  );
};
