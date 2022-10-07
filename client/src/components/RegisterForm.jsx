import FormInput from './FormInput';
import { Link } from 'react-router-dom';
import { inputs } from '../util/inputs';
import { useState } from 'react';

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
      className='mx-4 md:mx-auto mt-4 flex flex-col border border-indigo-200 p-4 md:w-2/3 lg:w-1/2 m-auto'
    >
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
      <fieldset className='flex items-center'>
        <label htmlFor='birthdate' className='w-1/2'>
          Date of Birth
        </label>
        <input type='date' name='birthdate' className='my-2 w-1/2 p-2' />
      </fieldset>
      <button
        type='submit'
        className='bg-indigo-50 py-4 transition hover:bg-indigo-200'
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
