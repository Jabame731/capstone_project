import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const ReservationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [dateInput, setDateInput] = useState({
    start_date: '',
    end_date: '',
  });

  const [timeInput, setTimeInput] = useState({
    start_time: '',
    end_time: '',
  });

  console.log('start', dateInput.start_date, timeInput.start_time);
  console.log('end', dateInput.end_date, timeInput.end_time);

  const [validationError, setValidationError] = useState('');
  const [payment, setPayment] = useState<number | null>(null);

  const { start_date, end_date } = dateInput;
  const { start_time, end_time } = timeInput;

  const { user } = useAppSelector((state) => state.auth);
  const { reservation, isError, isSuccess } = useAppSelector(
    (state) => state.reservation
  );

  const dateHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const timeHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setValidationError('');

    const startDateTime = new Date(
      `${dateInput.start_date} ${timeInput.start_time}`
    );
    const endDateTime = new Date(`${dateInput.end_date} ${timeInput.end_time}`);

    if (endDateTime <= startDateTime) {
      setValidationError('End date cannot be less than the start date');
      return;
    }
  };

  useEffect(() => {
    const startDateTime = new Date(`${start_date} ${start_time}`);
    const endDateTime = new Date(`${end_date} ${end_time}`);

    if (endDateTime < startDateTime) {
      setValidationError('End date cannot be less than the start date');
    } else {
      const startHour = startDateTime.getHours();
      const endHour = endDateTime.getHours();
      const hours = endHour - startHour;
      const paymentAmount = hours * 30;
      setPayment(paymentAmount);
      setValidationError('');
    }
  }, [start_date, end_date, start_time, end_time]);

  console.log('error is', validationError);
  console.log('payment is: ', payment);

  return (
    <>
      <div>
        <div className='bg-primary font-poppins'>
          <section className='max-w-4xl p-6 mx-auto rounded-md shadow-md'>
            <h2 className='text-lg font-semibold  capitalize text-dimWhite mt-10'>
              Book the Parking Slot
            </h2>

            <form>
              {validationError && (
                <span className='text-rose-500'>{validationError}</span>
              )}
              <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
                <div>
                  <label className='text-dimWhite '>Start Date</label>
                  <input
                    type='date'
                    name='start_date'
                    value={start_date}
                    onChange={dateHandleChange}
                    className={`mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm`}
                  />
                </div>

                <div>
                  <label className='text-dimWhite'>Start Time</label>
                  <input
                    id='start_time'
                    type='time'
                    name='start_time'
                    value={start_time}
                    onChange={timeHandleChange}
                    className='mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm '
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2'>
                <div>
                  <label className='text-dimWhite '>End Date</label>
                  <input
                    type='date'
                    name='end_date'
                    value={end_date}
                    onChange={dateHandleChange}
                    className={`mt-2 bg-primary relative block w-full appearance-none p-3 rounded-lg border border-gray-800 px-3 py-2 text-dimWhite placeholder-gray-500 focus:z-10 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring sm:text-sm`}
                  />
                </div>

                <div>
                  <label className='text-dimWhite'>End Time</label>
                  <input
                    id='end_time'
                    type='time'
                    name='end_time'
                    value={end_time}
                    onChange={timeHandleChange}
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
                  onClick={handleSubmit}
                >
                  Book Now
                </button>
              </div>

              {payment !== null && !isNaN(payment) && (
                <div className='mt-2'>Payment: ${payment}.00</div>
              )}

              <div className='flex justify-end mt-10'></div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default ReservationForm;
