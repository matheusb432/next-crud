interface CardProps {
  children: JSX.Element | JSX.Element[];
}

const Card = ({ children }: CardProps) => (
  <div
    className={`
  flex flex-col w-3/4
bg-gray-800 text-white rounded-md
`}>
    {children}
  </div>
);

export default Card;
