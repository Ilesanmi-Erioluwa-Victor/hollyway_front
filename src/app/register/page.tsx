'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState, useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { RegisterUser } from 'src/redux/services/user/user.types';
import { registerAction } from 'src/redux/services/user/user.service';
import Link from 'next/link';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Image from 'next/image';

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

  const handlePhoneNumberChange = useCallback((value : string) => {
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
    console.log(data)

    try {
      const resultAction = await dispatch(registerAction(data));

      if (registerAction.fulfilled.match(resultAction)) {
        const user = resultAction.payload === 'success';

        if (resultAction?.payload.status === 'success') {
          router.push('/login');
        }
      } else if (registerAction.rejected.match(resultAction)) {
        const error: any = resultAction.payload;
        return enqueueSnackbar(error.message, {
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
            <div>
              <label
                htmlFor='firstName'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                firstName
              </label>
              <div className='mt-2'>
                <input
                  id='firstName'
                  name='firstName'
                  type='text'
                  autoComplete='firstName'
                  onChange={handleInputChange}
                  value={data.firstName}
                  className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                last Name
              </label>
              <div className='mt-2'>
                <input
                  id='lastName'
                  name='lastName'
                  type='text'
                  autoComplete='lastName'
                  onChange={handleInputChange}
                  value={data.lastName}
                  className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  value={data.email}
                  onChange={handleInputChange}
                  className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Password
              </label>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  onChange={handleInputChange}
                  value={data.password}
                  className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

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
                {/* <input
                  id='mobile'
                  name='mobile'
                  type='text'
                  autoComplete='mobile'
                  onChange={handleInputChange}
                  value={data.mobile}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                /> */}
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
