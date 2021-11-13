import { useEffect, useState } from 'react';
import CustomerCollection from '../backend/db/customer-collection';
import Customer from '../core/customer';
import CustomerRepository from '../core/customer-repository';
import useVisible from './useVisible';

/**
 * * Implementing the useCustomers() custom Hook allow for all of the logic
 * * related to the customer pages to be separated from the interface
 * * of those components, making the code more reusable and testable.
 */
export default function useCustomers() {
  const { tableIsVisible, showTable, showForm } = useVisible();

  const repo: CustomerRepository = new CustomerCollection();
  const [customer, setCustomer] = useState<Customer>(Customer.empty());
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((repoCustomers) => {
      setCustomers(repoCustomers);

      showTable();
    });
  }

  function updateItem(newCustomer: Customer) {
    showForm();

    setCustomer(newCustomer);
  }

  async function deleteItem(newCustomer: Customer) {
    await repo.delete(newCustomer);

    getAll();
  }

  function goToCreateCustomer() {
    setCustomer(Customer.empty());

    showForm();
  }

  async function saveCustomer(newCustomer: Customer) {
    await repo.save(newCustomer);

    getAll();
  }

  return {
    updateItem,
    saveCustomer,
    deleteItem,
    getAll,
    goToCreateCustomer,
    showTable,
    customer,
    customers,
    tableIsVisible,
  };
}
