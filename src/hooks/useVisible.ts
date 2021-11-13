import { useState } from 'react';
export default function useVisible() {
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const showForm = () => setVisible('form');
  const showTable = () => setVisible('table');

  return {
    formIsVisible: visible === 'form',
    tableIsVisible: visible === 'table',
    showForm,
    showTable,
  };
}
