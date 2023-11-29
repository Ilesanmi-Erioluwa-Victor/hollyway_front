import { ChangeEventHandler } from 'react';

type AllowedProps<T> = T | UndefinedProps<T>;

type UndefinedProps<T> = Partial<Record<keyof T, undefined>>;

type InputProps = AllowedProps<{
  onChange: ChangeEventHandler;
  value: string;
  name: string;
  id: string;
  type: string;
  inputClass?: string;
}> & {
  label: string;
};

const Input = ({ label, ...props }: InputProps) => {
  const { id, name, value, onChange, type, inputClass } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {label ? label : name}
      </label>
      <div className='mt-2'>
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={name}
          onChange={onChange}
          value={value}
          className={inputClass}
        />
      </div>
    </div>
  );
};

export default Input;
