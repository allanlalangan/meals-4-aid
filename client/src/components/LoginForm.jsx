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
      className='mx-4 mt-4 flex md:w-2/3 md:mx-auto lg:w-1/2 flex-col border border-indigo-200 p-4'
    >
      <button className='flex items-center justify-center bg-indigo-50 py-4 transition hover:bg-indigo-200'>
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
        className='bg-indigo-50 py-4 transition hover:bg-indigo-200'
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
