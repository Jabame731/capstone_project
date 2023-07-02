import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useNavigate, Link } from 'react-router-dom';

import NotAllowed from '../../components/NotAllowed';

const UserDashboard = () => {
  const reservations = [];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {}, []);

  if (!user) {
    return <NotAllowed />;
  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto my-10 font-poppins h-fit'>
        <div className='min-w-full  border-gray-300 '>
          <div className=' rounded my-6'>
            {reservations.length > 0 ? (
              <table className='w-full table-auto'>
                <thead>
                  <tr className=' text-dimWhite uppercase text-sm leading-normal'>
                    <th className='py-3 px-6 text-center'>Parking Lot Name</th>
                    <th className='py-3 px-6 text-center'>
                      Parking Space Number
                    </th>
                    <th className='py-3 px-6 text-center'>Status</th>
                  </tr>
                </thead>
                <tbody className='text-white text-sm font-light'></tbody>
              </table>
            ) : (
              <h3 className='flex justify-center items-center text-lg font-semibold  capitalize text-rose-500 mt-10'>
                You Have No Reservation Added Yet
              </h3>
            )}
            <div className='container max-w-[1240px]'>
              <div className='flex justify-end'>
                {/* <Link to='/reserve-parking-slot'>
                  <button
                    type='submit'
                    className='block px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg mt-5 '
                  >
                    Reserve Now
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
