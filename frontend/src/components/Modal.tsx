import React from 'react';
import { ModalProps } from '../utilities/enums';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const slotId = location.pathname.split('/')[2];
  console.log(slotId);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='relative bg-white rounded-lg p-6 max-w-md'>
            <h2 className='text-xl font-bold mb-4'>Reserve This</h2>
            <p>Book this spot ?</p>
            <div className='flex justify-end mt-4'>
              <button
                onClick={onClose}
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-2 rounded'
              >
                No
              </button>
              <Link to=''>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                  Yes
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
