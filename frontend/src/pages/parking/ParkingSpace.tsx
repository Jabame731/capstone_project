import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { ParkingLot, ParkingSpaces } from '../../utilities/enums';

const ParkingSpace = () => {
  const [parkingLot, setParkingLot] = useState<ParkingLot | null>(null);
  const [parkingSpaces, setParkingSpace] = useState<ParkingSpaces[]>([]);

  const location = useLocation();

  const { user } = useAppSelector((state) => state.auth);

  const parkingLotId = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/parkingLot/getParkingLotById/${parkingLotId}`
        );
        setParkingLot(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [parkingLotId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/parkingSpace/getParkingSpaces/`
        );
        setParkingSpace(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className='max-w-[1240px]  mx-auto px-4 py-8'>
        <div className='bg-gray-100 rounded-lg shadow-lg p-8'>
          <h1 className='text-3xl font-bold mb-6'>Parking Lot</h1>
          <div className='mb-4'>
            <span className='font-bold'>Name:</span> {parkingLot?.name}
          </div>
          <div className='mb-4'>
            <span className='font-bold'>Address:</span> {parkingLot?.address}
          </div>
          <div className='mb-4'>
            <span className='font-bold'>Capacity:</span> {parkingLot?.capacity}
          </div>
        </div>
      </div>

      <div className='max-w-[1240px]  mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {parkingSpaces.map((parkingSpace) => (
          <div
            className={`bg-white rounded-lg shadow-md p-4 ${
              parkingSpace.sensor_value === 0 ||
              parkingSpace.availabilty === 'Reserved'
                ? 'cursor-not-allowed'
                : ''
            }`}
            key={parkingSpace.id}
          >
            {parkingSpace.sensor_value === 0 ? (
              <div>
                <span className='px-2 py-1 text-sm text-white bg-red-500 rounded-full'>
                  Occupied
                </span>
              </div>
            ) : (
              <>
                <div
                  className={`${
                    parkingSpace.sensor_value === 0 ||
                    parkingSpace.availabilty === 'Reserved'
                      ? 'disabled-link'
                      : ''
                  }`}
                >
                  <div>
                    <span className='px-2 py-1 text-sm text-black rounded-full '>
                      {parkingSpace.availabilty === 'Available' ? (
                        <Link to={`/reserve-parking-slot/${parkingSpace.id}`}>
                          <span className='text-white bg-green-500 p-1 rounded-sm'>
                            Available
                          </span>
                        </Link>
                      ) : (
                        <span className='text-white mb-2 bg-blue-500 p-1 rounded-sm'>
                          Reserved
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                <span className={`px-2  text-sm text-black rounded-full`}>
                  {parkingSpace.availabilty === 'Reserved'
                    ? 'Already Reserved'
                    : parkingSpace.sensor_value === 0
                    ? 'Occupied'
                    : ''}
                </span>
              </>
            )}
            <div>
              <p className='text-gray-600 mt-5'>Space Number:</p>
              <p className='text-xl font-semibold mt-1'>
                {parkingSpace.space_number}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ParkingSpace;
