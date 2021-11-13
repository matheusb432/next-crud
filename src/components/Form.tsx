import { useEffect, useState } from 'react';
import Customer from '../core/customer';
import Button from './Button';
import Input from './Input';

interface FormProps {
  customer: Customer;
  cancel?: () => void;
  customerChanged?: (customer: Customer) => void;
}

export default function Form({ customer, cancel, customerChanged }: FormProps) {
  const id = customer?.id;
  const [name, setName] = useState<string>(customer?.name ?? '');
  const [age, setAge] = useState<number>(customer?.age ?? 0);

  useEffect(() => {
    setName(customer.name);
    setAge(customer.age);
  }, [customer]);

  return (
    <div className='bg-gray-700 p-6 rounded-lg'>
      <div>
        {id ? <Input label='ID' value={id} readonly /> : false}
        <Input label='Name' value={name} onChange={(newName) => setName(newName)} />
        <Input
          label='Age'
          type='number'
          value={age}
          onChange={(newAge) => setAge(newAge)}
        />
      </div>
      <div className='flex justify-end mt-3'>
        <Button className='mr-4' onClick={cancel}>
          Cancel
        </Button>
        <Button
          color={id ? 'blue' : 'green'}
          onClick={() => customerChanged?.(new Customer(name, +age, id))}>
          {id ? 'Update' : 'Create'}
        </Button>
      </div>
    </div>
  );
}
