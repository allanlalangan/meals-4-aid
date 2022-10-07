import FormInput from './FormInput';
import { Link } from 'react-router-dom';
import { inputs } from '../util/inputs';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    profilePic: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='m-4 flex md:w-2/3 md:mx-auto lg:w-1/2 flex-col bg-slate-50 border border-slate-200 shadow-md p-12 rounded'
    >
      <button className='mb-4 flex items-center justify-center bg-slate-100 border border-slate-200 py-4 transition hover:border-emerald-400 rounded'>
        <FcGoogle className='mx-2 text-2xl' />

        <span className=''>Continue with Google</span>
      </button>
      <span className='relative m-auto flex w-full flex-col content-center items-center py-2 text-center'>
        <span className='z-10 bg-slate-50 px-4'>or</span>
        <div className='absolute top-1/2 h-[1px] w-full bg-indigo-100'></div>
      </span>
      {inputs?.map((input, i) => (
        <>
          <FormInput
            key={i}
            onChange={onChange}
            {...input}
            pattern={
              input.name === 'confirm'
                ? values.password
                : input.pattern || undefined
            }
            value={values[input.name]}
          />
        </>
      ))}
      {/* <fieldset className='flex items-center'>
        <label htmlFor='birthdate' className='w-1/2'>
          Date of Birth
        </label>
        <input type='date' name='birthdate' className='my-2 w-1/2 p-2' />
      </fieldset> */}
      <button
        type='submit'
        className='mb-4 flex items-center justify-center bg-slate-100 border border-slate-200 py-4 transition hover:border-emerald-400 rounded'
      >
        Create My Account
      </button>
      <span>
        Already have an account?{' '}
        <Link className='underline-offset-4 hover:underline' to='/login'>
          <strong>Login</strong>
        </Link>
      </span>
    </form>
  );
};
export default Register;
