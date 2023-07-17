import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getParkingLotLists } from '../../store/parking-lot/action';

import Loading from '../../components/Loading';
import { reset } from '../../store/parking-lot/reducer';

const ParkingLot = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const { parkingLots, isLoading, isError } = useAppSelector(
    (state) => state.parking
  );

  useEffect(() => {
    if (isError) {
      console.log('server error');
    }

    if (!user) {
      navigate('/');
    }

    dispatch(getParkingLotLists());

    dispatch(reset());
  }, [user, navigate, isError, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className='flex content-center flex-wrap justify-center'>
        {parkingLots.map((parkingLot) => (
          <div
            className='max-w-sm rounded overflow-hidden shadow-lg flex w-1/3 m-10'
            data-cy='parking_space'
            key={parkingLot.id}
          >
            <Link to={`/parking-lots/${parkingLot.id}`}>
              <div>
                <div className='px-6 py-4'>
                  <div className='font bold text-xl mb-2'>
                    {parkingLot.name}
                  </div>
                  <div className='text-gray-500 text-sm mb-2'>
                    {parkingLot.address}
                  </div>
                  <p className='text-gray-700 text-base'>
                    Capacity: {parkingLot.capacity}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ParkingLot;
