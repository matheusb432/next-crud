import { useEffect, useState } from 'react';
import Customer from '../core/customer';
import { Action } from '../core/types/action';
import { Actions } from '../core/types/actions.enum';
import { IconDelete, IconEdit } from './icons';

interface TableProps {
  customers: Customer[];
  updateItem?: (customer: Customer) => void;
  deleteItem?: (customer: Customer) => void;
}

export default function Table({ customers, updateItem, deleteItem }: TableProps) {
  const [actionsMap, setActionsMap] = useState<Map<Actions, any>>();

  useEffect(() => {
    setActionsMap(
      new Map<Actions, Action>([
        [Actions.Update, { color: 'text-green-500', icon: IconEdit, callback: updateItem }],
        [Actions.Delete, { color: 'text-red-500', icon: IconDelete, callback: deleteItem }],
      ])
    );
  }, [deleteItem, updateItem]);

  const getAction = (a: Actions) => actionsMap?.get(a) as Action;

  const getColor = (a: Actions) => getAction(a)?.color;

  const getIcon = (a: Actions) => getAction(a)?.icon;

  const getCallback = (customer: Customer, a: Actions) =>
    getAction(a)?.callback?.(customer);

  const renderHeader = () => (
    <tr>
      <th className='text-left p-4'>ID</th>
      <th className='text-left p-4'>Name</th>
      <th className='text-left p-4'>Age</th>
      <th className='p-4'>Actions</th>
    </tr>
  );

  const renderData = () =>
    customers?.map((customer: Customer, i) => {
      const { id, name, age } = customer;

      return (
        <tr
          className={`
          ${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-200'}
          text-black
          `}
          key={id ?? i}>
          <td className='text-left p-4'>{id || `UID${i}`}</td>
          <td className='text-left p-4'>{name}</td>
          <td className='text-left p-4'>{age}</td>
          {renderActions(customer)}
        </tr>
      );
    });

  const renderActions = (customer: Customer) => (
    <td className='flex justify-center'>
      {renderAction(customer, Actions.Update)}
      {renderAction(customer, Actions.Delete)}
    </td>
  );

  const renderAction = (customer: Customer, action: Actions) => (
    <button
      className={`
      flex justify-center items-center 
      ${getColor(action)} p-2 m-1 
      rounded-full hover:bg-purple-50`}
      onClick={() => getCallback(customer, action)}>
      {getIcon(action)}
    </button>
  );

  return (
    <table className='w-full rounded-xl overflow-hidden'>
      <thead className='text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800'>
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
      {/* // * uncomment below to enable a scrollable table (overflows with +6 items) */}
      {/* <tbody className='overflow-y-auto max-h-[336px] w-full block'>{renderData()}</tbody> */}
    </table>
  );
}
