interface TailwindIconProps {
  children?: JSX.Element;
}

/**
 * a simple '~~' repositioned to look sort of like tailwind's logo
 */
const TailwindIcon = ({ children }: TailwindIconProps) => (
  <h1 className='relative text-white text-7xl opacity-75 hover:opacity-100 transition-all duration-300'>
    {children ?? ''}
    <span className='ml-4 font-bold text-8xl text-blue-400'>
      ~ <span className='absolute right-[-8px] bottom-6'>~</span>
    </span>
  </h1>
);

export default TailwindIcon;
