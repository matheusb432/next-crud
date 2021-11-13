interface InputProps {
  value: any;
  label: string;
  type?: 'text' | 'number';
  readonly?: boolean;
  className?: string;
  onChange?: (newValue: any) => void;
}

export default function Input({
  label,
  type,
  value,
  readonly,
  className,
  onChange,
}: InputProps) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={`input${label}`} className='mb-4'>
        {label}
      </label>
      <input
        className={`
            border-2 border-purple-500 rounded-lg focus:outline-none
            focus:border-purple-900 transition-all duration-500
            bg-gray-300 focus:bg-white px-4 py-2 focus:shadow-2xl
            text-black mb-3 ${className}
        `}
        id={`input${label}`}
        type={type || 'text'}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readonly}
      />
    </div>
  );
}
