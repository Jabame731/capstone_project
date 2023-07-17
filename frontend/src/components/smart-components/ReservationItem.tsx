import React, { useEffect, useState } from 'react';
import { ParkingSpaces, ReservationProps } from '../../utilities/enums';
import axios from 'axios';

const ReservationItem = ({ reservation }: ReservationProps) => {
  const [parkingSpace, setParkingSpace] = useState<ParkingSpaces | null>(null);
  const parkingSpaceId = reservation.space_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/parkingSpace/getParkingSpaceById/${parkingSpaceId}`
        );
        setParkingSpace(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [parkingSpaceId]);

  return (
    <>
      <tr className='text-black border-gray-200 h-f9t'>
        <div className='flex justify-center items-center'>
          <span className='mt-[15px]'>{parkingSpace?.space_number} </span>
        </div>

        <td className='py-3 px-6 text-left'>
          <div className='flex justify-center items-center'>
            <div className='mr-2'></div>
            <div className=''>
              <span className='font-medium flex justify-center items-center'>
                {reservation.vehicle_name}
              </span>
            </div>
          </div>
        </td>
        <td className='py-3 px-6 text-left'>
          <div className='flex justify-center items-center'>
            <div className='mr-2'></div>
            <div className=''>
              <span className='font-medium flex justify-center items-center'>
                {reservation.start_date}
              </span>
            </div>
          </div>
        </td>
        <td className='py-3 px-6 text-left'>
          <div className='flex justify-center items-center'>
            <div className='mr-2'></div>
            <div className=''>
              <span className='font-medium flex justify-center items-center'>
                {reservation.end_date}
              </span>
            </div>
          </div>
        </td>
        <td className='py-3 px-6 text-left'>
          <div className='flex justify-center items-center'>
            <div className='mr-2'></div>
            <div className=''>
              <span className='font-medium flex justify-center items-center'>
                {reservation.start_time}
              </span>
            </div>
          </div>
        </td>
        <td className='py-3 px-6 text-left'>
          <div className='flex justify-center items-center'>
            <div className='mr-2'></div>
            <div className=''>
              <span className='font-medium flex justify-center items-center'>
                {reservation.end_time}
              </span>
            </div>
          </div>
        </td>
        <td className='py-3 px-6 text-left'>
          <div className='flex justify-center items-center'>
            <div className='mr-2'></div>
            <div className=''>
              <span className='font-medium flex justify-center items-center'>
                ₱ {reservation.payment}.00
              </span>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ReservationItem;
