import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useNavigate, Link } from 'react-router-dom';
import NotAllowed from '../../components/NotAllowed';

import { reset } from '../../store/reservation/reducer';
import Loading from '../../components/Loading';
import { getReservationByUser } from '../../store/reservation/action';
import { shallowEqual } from 'react-redux';
import ReservationItem from '../../components/smart-components/ReservationItem';

const UserDashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth, shallowEqual);

  const { reservations, isLoading } = useAppSelector(
    (state) => state.reservation
  );

  console.log(reservations);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    dispatch(getReservationByUser());
    dispatch(reset());
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <Loading />;
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
                    <th className='py-3 px-6 text-center'>
                      Parking Space Number
                    </th>
                    <th className='py-3 px-6 text-center'>Vehicle Name</th>
                    <th className='py-3 px-6 text-center'>Date Started</th>
                    <th className='py-3 px-6 text-center'>Date Ended</th>
                    <th className='py-3 px-6 text-center'>Time Start</th>
                    <th className='py-3 px-6 text-center'>Time End</th>
                    <th className='py-3 px-6 text-center'>Price Total</th>
                  </tr>
                </thead>
                <tbody className='text-white text-sm font-light'>
                  {reservations.map((reservation) => (
                    <ReservationItem
                      key={reservation.id}
                      reservation={reservation}
                    />
                  ))}
                </tbody>
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
