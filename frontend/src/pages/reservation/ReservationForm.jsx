import React from 'react';

const ReservationForm = () => {
  return (
    <>
      <div>
        <div className='bg-primary font-poppins'>
          <section className='max-w-4xl p-6 mx-auto rounded-md shadow-md'>
            <h2 className='text-lg font-semibold  capitalize text-dimWhite mt-10'>
              Book the Parking Slot
            </h2>

            <form>
              <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
                <div>
                  <label className='text-dimWhite '>Start Date</label>
                  <input
                    type='datetime-local'
                    name='start-date'
                    className=' mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
                  />
                </div>

                <div>
                  <label className='text-dimWhite'>End Time</label>
                  <input
                    id='end_date'
                    type='datetime-local'
                    name='end_date'
                    className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
                  />
                </div>
              </div>

              {/* footer register form */}
              <div className='flex justify-between font-poppins mt-10'>
                <button
                  className='text-sm px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600 sm:text-sm'
                  type='submit'
                  data-cy='submit'
                >
                  Book Now
                </button>
              </div>

              <div className='flex justify-end mt-10'></div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default ReservationForm;
