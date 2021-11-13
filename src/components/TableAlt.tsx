import Customer from '../core/customer';

interface TableAltProps {
  customers: Customer[];
  edit?: (id: any) => void;
  delete?: (id: any) => void;
}

/**
 * alternate Table component that dynamically generates the table based
 * on the object keys of the object arguments of renderRow()
 */
export default function TableAlt({ customers }: TableAltProps) {
  const renderRow = (option: 'th' | 'td', ...rowObjects: any[]) =>
    rowObjects?.map((rowObject, i) => {
      return (
        <tr key={i} className='flex justify-around px-4 py-1 items-center space-x-8 w-full'>
          {option === 'td' ? renderItemData(rowObject) : renderHeaderData(rowObject)}
        </tr>
      );
    });

  const renderItemData = (obj: any) =>
    Object.keys(obj)?.map((key, i) => {
      return <td key={`${key}${i}`}>{obj[key]}</td>;
    });

  const renderHeaderData = (obj: any) =>
    Object.keys(obj)?.map((key, i) => {
      return <th key={`${key}${i}`}>{obj[key]}</th>;
    });

  const renderCustomers = () => renderRow('td', ...customers);

  return (
    <table className='w-full border-2 border-purple-500'>
      <thead>{renderRow('th', { uid: 'UID', name: 'Name', age: 'Age' })}</thead>
      <tbody>{renderCustomers()}</tbody>
    </table>
  );
}
