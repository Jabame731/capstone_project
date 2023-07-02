import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Slide, toast } from 'react-toastify';
import { reset } from '../store/auth/reducer';
import { registerUser } from '../store/auth/action';
import Loading from '../components/Loading';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [registerData, setRegisterData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone_number: '',
    telephone_number: '',
  });

  const {
    email,
    first_name,
    last_name,
    password,
    confirmPassword,
    address,
    phone_number,
    telephone_number,
  } = registerData;

  const { user, isError, isSuccess, isLoading } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error('Opps, Error Occured', {
        transition: Slide,
        theme: 'colored',
      });
    }

    if (isSuccess) {
      toast.success('You are Registered');
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, navigate, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Opps password do not match! try again');
    } else {
      const userData = {
        email,
        password,
        first_name,
        last_name,
        address,
        phone_number,
        telephone_number,
      };

      dispatch(registerUser(userData));
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='bg-primary font-poppins'>
      <section className='max-w-4xl p-6 mx-auto rounded-md'>
        <h2 className='text-lg font-semibold  capitalize text-black mt-10'>
          Register Your Account
        </h2>

        <form>
          {/* email, password, confirm password */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-3'>
            <div>
              <label className='text-black'>Email Address</label>
              <input
                id='email'
                type='email'
                name='email'
                data-cy='input-email'
                value={email}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-black'>Password</label>
              <input
                id='password'
                type='password'
                name='password'
                data-cy='input-password'
                value={password}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-black'>Password Confirmation</label>
              <input
                id='confirmPassword'
                type='password'
                name='confirmPassword'
                data-cy='input-confirm_password'
                value={confirmPassword}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* firstname, lastname, address */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-3'>
            <div>
              <label className='text-black '>First Name</label>
              <input
                id='first_name'
                type='text'
                name='first_name'
                data-cy='input-first_name'
                value={first_name}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-black'>Last Name</label>
              <input
                id='last_name'
                type='text'
                name='last_name'
                data-cy='input-last_name'
                value={last_name}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-black '>Address</label>
              <input
                id='address'
                type='text'
                name='address'
                data-cy='input-address'
                value={address}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* phone number, telephone number, image */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
            <div>
              <label className='text-black '>Phone Number</label>
              <input
                id='phone_number'
                type='text'
                name='phone_number'
                data-cy='input-phone_number'
                value={phone_number}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className='text-black'>Telephone Number</label>
              <input
                id='telephone_number'
                type='text'
                name='telephone_number'
                data-cy='input-telephone_number'
                value={telephone_number}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* image */}
          <div>
            <label className='mt-10 block text-sm font-medium text-black'>
              Image
            </label>
            <div className='mt-4 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-md'>
              <div className='space-y-1 text-center'>
                <svg
                  className='mx-auto h-12 w-12 text-black'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'
                >
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <div className='flex text-sm text-gray-600'>
                  <label className='relative cursor-pointer bg-primary rounded-md font-medium text-indigo-600 hover:text-indigo-500'>
                    <span className=''>Upload a file</span>
                    <input
                      id='image'
                      name='image'
                      type='file'
                      className='sr-only'
                      value=''
                    />
                  </label>
                  <p className='pl-1 text-gray-700'>or drag and drop</p>
                </div>
                <p className='text-xs text-black'>PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {/* footer register form */}
          <div className='flex justify-between font-poppins mt-10'>
            <p className='text-sm sm:text-sm text-center text-black cursor-pointer'>
              <Link to='/'>
                <span>
                  Got an account?{' '}
                  <span className='underline hover:text-black'>Login Here</span>{' '}
                </span>
              </Link>
            </p>

            <button
              className='text-sm px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm'
              type='submit'
              data-cy='submit'
              onClick={handleRegister}
            >
              Register
            </button>
          </div>

          <div className='flex justify-end mt-10'></div>
        </form>
      </section>
    </div>
  );
};

export default Register;
