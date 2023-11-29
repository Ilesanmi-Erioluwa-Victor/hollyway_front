'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState, useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { RegisterUser } from 'src/redux/services/user/user.types';
import { registerAction } from 'src/redux/services/user/user.service';
import Link from 'next/link';
import PhoneInput from 'react-phone-number-input';
import { Input } from 'src/components/atoms';

const Register = () => {
  const { isLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState<RegisterUser>({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    mobile: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value.trim() });
  };

  // used useCallback to avoid auto refresh of react-phone-number-input package reload
  const handlePhoneNumberChange = useCallback((value: string) => {
    setData((prevData) => ({ ...prevData, mobile: value }));
  }, []);

  const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { password, email, firstName, lastName, mobile } = data;

    if (!password || !email || !firstName || !lastName || !mobile) {
      return enqueueSnackbar('Please, fill up all inputs ', {
        variant: 'error',
      });
    }

    try {
      const resultAction = await dispatch(registerAction(data));

      if (registerAction.fulfilled.match(resultAction)) {
        if (resultAction?.payload.status === 'success') {
          router.push('/login');
        }
      } else if (registerAction.rejected.match(resultAction)) {
        const error: any = resultAction.payload;

        return enqueueSnackbar(`${error.message}, please try again !`, {
          variant: 'error',
        });
      }

      setData({
        password: '',
        email: '',
        mobile: '',
        firstName: '',
        lastName: '',
      });
    } catch (err: any) {
      throw err;
    }
  };

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Account Sign Up
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
        <div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
          <form
            className='space-y-6'
            onSubmit={handleInputSubmit}
          >
            <Input
              label={'firstName'}
              id={'firstName'}
              inputClass={
                'block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              }
              value={data.firstName}
              onChange={handleInputChange}
              type='text'
              name={'firstName'}
            />

            <Input
              label={'lastName'}
              id={'lastName'}
              inputClass={
                'block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              }
              value={data.lastName}
              onChange={handleInputChange}
              type='text'
              name={'lastName'}
            />

            <Input
              label={'email'}
              id={'email'}
              inputClass={
                'block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              }
              value={data.email}
              onChange={handleInputChange}
              type='email'
              name={'email'}
            />

            <Input
              label={'password'}
              id={'password'}
              inputClass={
                'block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              }
              value={data.password}
              onChange={handleInputChange}
              type='password'
              name={'password'}
            />

            <div>
              <label
                htmlFor='mobile'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                mobile No
              </label>
              <div className='mt-2'>
                <PhoneInput
                  international
                  defaultCountry='NG'
                  onChange={handlePhoneNumberChange}
                  value={data.mobile}
                  id='mobile'
                  name='mobile'
                  type='text'
                  className='block w-full rounded-md border-0 p-[.5rem] pl-2 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                {isLoading ? 'please wait' : 'sign up'}
              </button>
            </div>
          </form>
        </div>

        <p className='mt-10 text-center text-sm text-gray-500'>
          Already a member?{' '}
          <Link
            href='/login'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
