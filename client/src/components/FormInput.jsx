const FormInput = (props) => {
  const {
    onChange,
    label,
    type,
    name,
    value,
    pattern,
    placeholder,
    errorMessage,
    required,
  } = props;
  return (
    <fieldset className='relative mb-2 flex items-center'>
      <label htmlFor={name} className='w-1/2'>
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        placeholder={placeholder}
        className='input my-2 w-1/2 p-2'
        required={required}
      />
      {errorMessage && (
        <span className='absolute top-10 text-xs tracking-wide text-red-500'>
          {errorMessage}
        </span>
      )}
    </fieldset>
  );
};
export default FormInput;
