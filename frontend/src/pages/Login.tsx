import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto'>
          <form className='p-8 mt-6 mb-0 space-y-4 rounded-lg '>
            <h1 className='text-xl font-medium mt-5 mb-10 flex justify-center'>
              Welcome
            </h1>
            <div>
              <label className='text-sm font-medium'>Email</label>
              <div className='relative mt-1'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
                  placeholder='Enter email'
                />
              </div>
            </div>
            <div>
              <label className='text-sm font-medium'>Password</label>
              <div className='relative mt-1'>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
                  placeholder='Enter password'
                />
              </div>
            </div>
            <button
              type='submit'
              className='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg mt-5 '
            >
              Sign in
            </button>

            <p className='text-sm text-center text-gray-500'>
              No account?
              <Link to='/register'>
                <span className='underline'> Register Here</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
