import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logoutUser } from '../store/auth/action';
import { reset } from '../store/auth/reducer';

import { FiLogOut } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate('/');
  };

  const toggeMenu = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full h-[90px]'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <Link to='/user-dashboard'>
          <div>
            <h1 className='text-[#3b82f6]'>Smart Parking</h1>
          </div>
        </Link>
        <div className='hidden md:flex'>
          <ul className='flex text-gray-600 items-center'>
            <Link to='/parking-lots'>
              <li>Parking Spot</li>
            </Link>

            {user ? (
              <>
                <Link to='/user-profile'>
                  <li>Profile</li>
                </Link>
                {/* <Link to='/reserve'>
                <li>Reserve</li>
              </Link>
              <Link to='/vehicle'>
                <li>Vehicle</li>
              </Link> */}
                <button onClick={handleLogout}>
                  <li className='text-xl'>
                    <FiLogOut />
                  </li>
                </button>
              </>
            ) : (
              <>
                <Link to='/login'>
                  <li>Login</li>
                </Link>
                <Link to='/register'>
                  <li>Register</li>
                </Link>
              </>
            )}
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={toggeMenu} className='block md:hidden'>
          {nav ? (
            <AiOutlineClose size={30} className='text-gray-500' />
          ) : (
            <AiOutlineMenu size={30} className='text-gray-500' />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'w-full  text-gray-700 bg-blue-400 h-100 absolute top-[90px] left-0 flex justify-center text-center text-xl'
              : 'absolute left-[-100%]'
          }
        >
          <ul>
            <Link to='/user-dashboard'>
              <li>Parking Spot</li>
            </Link>

            {user ? (
              <>
                <Link to='/user-profile'>
                  <li>Profile</li>
                </Link>
                {/* <Link to='/reserve'>
                  <li>Reserve</li>
                </Link>
                <Link to='/vehicle'>
                  <li>Vehicle</li>
                </Link> */}
                <button onClick={handleLogout}>
                  <li className='text-xl'>
                    <FiLogOut />
                  </li>
                </button>
              </>
            ) : (
              <>
                <Link to='/login'>
                  <li>Login</li>
                </Link>
                <Link to='/register'>
                  <li>Register</li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
