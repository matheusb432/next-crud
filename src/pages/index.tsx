import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import useCustomers from '../hooks/useCustomers';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  const {
    customer,
    customers,
    tableIsVisible,
    saveCustomer,
    updateItem,
    deleteItem,
    goToCreateCustomer,
    showTable,
  } = useCustomers();

  return (
    <Layout title='Next.JS Simple CRUD'>
      {tableIsVisible ? (
        <>
          <div className='flex justify-end'>
            <Button color='green' className='mb-4' onClick={goToCreateCustomer}>
              New Customer
            </Button>
          </div>
          <Table customers={customers} updateItem={updateItem} deleteItem={deleteItem} />
        </>
      ) : (
        <Form customer={customer} cancel={showTable} customerChanged={saveCustomer} />
      )}
    </Layout>
  );
};

export default Home;
