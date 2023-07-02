import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Slide, toast } from 'react-toastify';
import { reset } from '../store/auth/reducer';
import { loginUser } from '../store/auth/action';
import Loading from '../components/Loading';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginData;

  const { user, isLoading, isError, isSuccess } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error('Opps Error Occured', {
        transition: Slide,
        theme: 'colored',
      });
    }

    if (isSuccess) {
      navigate('/user-dashboard');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, navigate, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(loginUser(userData));
  };

  if (isLoading) {
    return <Loading />;
  }

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
                  value={email}
                  onChange={handleChange}
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
                  value={password}
                  onChange={handleChange}
                  className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
                  placeholder='Enter password'
                />
              </div>
            </div>
            <button
              type='submit'
              className='block w-full px-5 py-3 text-sm font-medium rounded-lg mt-5 bg-indigo-600 text-white cursor-pointer'
              onClick={handleLogin}
            >
              Login
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
