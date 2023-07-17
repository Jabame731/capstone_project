import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Slide, toast } from 'react-toastify';
import { reset } from '../store/auth/reducer';
import { editUser } from '../store/auth/action';

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const location = useLocation();

  const { user, isSuccess, isError } = useAppSelector((state) => state.auth);

  const [editData, setEditData] = useState({
    email: user ? user.email : '',
    first_name: user ? user.first_name : '',
    last_name: user ? user.last_name : '',
    address: user ? user.address : '',
    phone_number: user ? user.phone_number : '',
    telephone_number: user ? user.telephone_number : '',
  });
  const uniqueId = location.pathname.split('/')[2];

  console.log(uniqueId);

  const {
    email,
    first_name,
    last_name,
    address,
    phone_number,
    telephone_number,
  } = editData;

  useEffect(() => {
    if (isError) {
      toast.error('something is wrong ', {
        transition: Slide,
        theme: 'colored',
      });
    }

    if (isSuccess) {
      toast.success('User is Edited Successfully');
      navigate('/user-profile');
    }

    dispatch(reset());
  }, [user, isSuccess, isError, navigate, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const userData = {
      email: email,
      first_name: first_name,
      last_name: last_name,
      address: address,
      phone_number: phone_number,
      telephone_number: telephone_number,
    };
    dispatch(editUser({ uniqueId: uniqueId, userData }));
  };

  return (
    <div className='bg-primary font-poppins '>
      <section className='max-w-4xl p-6 mx-auto rounded-md shadow-md h-screen'>
        <h2 className='text-lg font-semibold  capitalize  mt-10'>
          Edit Your Account Here
        </h2>

        <form>
          {/* username, firstname, lastname*/}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
            <div>
              <label className=''>Email Address</label>
              <input
                id='email'
                data-cy='data-for-email'
                type='email'
                name='email'
                disabled
                value={email}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2  placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* firstname, middlename, lastname */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-3'>
            <div>
              <label className=' '>First Name</label>
              <input
                data-cy='edit-first_name'
                id='first_name'
                type='text'
                name='first_name'
                value={first_name}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2  placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className=''>Last Name</label>
              <input
                data-cy='edit-last_name'
                id='last_name'
                type='text'
                name='last_name'
                value={last_name}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2  placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* address, birth_date */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-1'>
            <div>
              <label className=' '>Address</label>
              <input
                data-cy='edit-address'
                id='address'
                type='text'
                name='address'
                value={address}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2  placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* phone number, telephone number */}
          <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
            <div>
              <label className=' '>Phone Number</label>
              <input
                data-cy='edit-phone_number'
                id='phone_number'
                type='text'
                name='phone_number'
                value={phone_number}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2  placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>

            <div>
              <label className=''>Telephone Number</label>
              <input
                data-cy='edit-telephone_number'
                id='telephone_number'
                type='text'
                name='telephone_number'
                value={telephone_number}
                onChange={handleChange}
                className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2  placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
              />
            </div>
          </div>

          {/* footer edit form */}
          <div className='flex justify-between font-poppins mt-10'>
            <p className='text-sm sm:text-sm text-center text-black cursor-pointer'>
              <Link to='/user-profile'>
                <span className='underline hover:'>Go Back</span>
              </Link>
            </p>

            <button
              data-cy='submit'
              className='text-sm px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm'
              type='submit'
              onClick={handleEditBtn}
            >
              Submit
            </button>
          </div>

          <div className='flex justify-end mt-10'></div>
        </form>
      </section>
    </div>
  );
};

export default EditUser;
