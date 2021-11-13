interface ButtonProps {
  children: JSX.Element | string;

  color?: 'green' | 'blue' | 'gray';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  color = 'gray',
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`
    bg-gradient-to-r from-${color}-400 to-${color}-700
    transform-gpu duration-500 hover:scale-110
    text-white px-4 py-2 rounded-md ${className}
  `}
      onClick={onClick}>
      {children}
    </button>
  );
}
