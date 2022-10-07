import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { inputs } from '../util/inputs';
import FormInput from './FormInput';

const Login = () => {
  const loginInputs = inputs.slice(1, 3);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='m-4 flex md:w-2/3 md:mx-auto lg:w-1/2 flex-col bg-slate-50 border border-slate-200 shadow-md p-12 rounded-sm'
    >
      <button className='mb-4 flex items-center justify-center bg-slate-100 border border-slate-200 py-4 transition hover:border-emerald-400 rounded'>
        <FcGoogle className='mx-2 text-2xl' />
        <span className=''>Login with Google</span>
      </button>
      <span className='relative m-auto flex w-full flex-col content-center items-center py-2 text-center'>
        <span className='z-10 bg-slate-50 px-4'>or</span>
        <div className='absolute top-1/2 h-[1px] w-full bg-indigo-100'></div>
      </span>
      {loginInputs?.map(({ name, type, placeholder, required, label }, i) => (
        <FormInput
          key={i}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          label={label}
        />
      ))}
      <button
        type='submit'
        className='mb-4 flex items-center justify-center bg-slate-100 border border-slate-200 py-4 transition hover:border-emerald-400 rounded'
      >
        Login
      </button>
      <span>
        Not a member?{' '}
        <Link className='underline-offset-4 hover:underline' to='/register'>
          <strong>Create an account</strong>
        </Link>
      </span>
    </form>
  );
};
export default Login;
