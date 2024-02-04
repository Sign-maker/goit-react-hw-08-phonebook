import { useEffect } from 'react';
import { useContacts } from 'hooks/useContacts';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { Empty, List, Spin } from 'antd';

export const ContactList = () => {
  const { fetchContacts, filteredContacts, isLoading } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      {isLoading && (
        <Spin tip="Loading" size="large">
          <div></div>
        </Spin>
      )}
      {filteredContacts.length > 0 && (
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
            xxl: 3,
          }}
          dataSource={filteredContacts}
          renderItem={({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          )}
        ></List>
      )}
      {!isLoading && !filteredContacts.length && <Empty />}
    </>
  );
};
