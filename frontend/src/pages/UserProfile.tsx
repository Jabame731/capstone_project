import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import NotAllowed from '../components/NotAllowed';

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {}, []);

  if (!user) {
    return <NotAllowed />;
  }
  return (
    <>
      <div className='bg-primary '>
        <Navbar />
        <div className='mt-4 max-w-7xl mx-auto font-poppins rounded-md shadow-md overflow-hidden h-fit'>
          <div className='px-4 py-5 sm:px-6 '>
            <h1 className=' text-lg font-medium leading-6 text-black'>
              {user?.user_role === 'admin' ? (
                <span>Admin Profile</span>
              ) : (
                <span>User Profile</span>
              )}
            </h1>
            <p className='mt-1 max-w-2xl text-sm text-black'>
              Personal details and contact information.
            </p>
          </div>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex flex-col items-center'>
              <img
                className='h-32 w-32 rounded-full object-cover'
                src=''
                alt='UserImage'
              />
              <h2 className='mt-4 font-medium text-lg text-black'>
                {}
                {user?.first_name} {user?.last_name}
              </h2>
            </div>
            <div className='mt-5'>
              <dl>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-700'>Email</dt>
                  <dd className='mt-1 text-sm text-black sm:mt-0 sm:col-span-2'>
                    {user?.email}
                  </dd>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-700'>Address</dt>
                  <dd className='mt-1 text-sm text-black sm:mt-0 sm:col-span-2'>
                    {user?.address}
                  </dd>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-700'>
                    Phone Number
                  </dt>
                  <dd className='mt-1 text-sm text-black sm:mt-0 sm:col-span-2'>
                    {user?.phone_number}
                  </dd>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-700'>
                    Telephone Number
                  </dt>
                  <dd className='mt-1 text-sm text-black sm:mt-0 sm:col-span-2'>
                    {user?.telephone_number}
                  </dd>
                </div>
              </dl>
            </div>
            <div className='flex justify-between  mt-5'>
              <Link to={`edit-profile/?identification=${user?.uniqueId}`}>
                <button
                  className='text-sm px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm'
                  type='submit'
                >
                  Edit
                </button>
              </Link>
              {/* <Link to="/">
              <button
                className="text-sm px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm"
                type="submit"
              >
                Go Back
              </button>
            </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
