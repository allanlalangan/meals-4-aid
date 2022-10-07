import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex flex-col h-header w-full items-center justify-between bg-slate-700 pr-4 text-slate-300'>
      <Link className='w-full' to='/'>
        <span className='flex cursor-pointer items-center justify-center py-2 text-2xl uppercase tracking-wider transition hover:text-yellow-100'>
          Meals For Aid
        </span>
      </Link>
      <nav className='flex w-full items-center justify-center'>
        <Link to='/dashboard'>
          <button className='mx-2 transition hover:text-slate-100'>
            Dashboard
          </button>
        </Link>
        <Link to='/login'>
          <button className='mx-2 transition hover:text-slate-100'>
            Login
          </button>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
