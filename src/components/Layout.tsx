import Card from './Card';
import Title from './Title';

interface LayoutProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div
      className='
    h-screen
    flex justify-center items-center
    bg-gradient-to-r from-blue-900 to-purple-900
   text-white
     '>
      <Card>
        <Title>{title}</Title>
        <div className='p-12 py-10'>{children}</div>
      </Card>
    </div>
  );
}
