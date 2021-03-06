import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import useRequireAuth from "../../lib/useRequiredAuth";

const Header = () => {
  // Session Data
  const {data:session} = useSession();
  const user = session?.user;

  return (
    <header className='font-cal '>
      <div className='max-w-7xl   mx-auto flex  p-5  flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <svg
              className='w-12 h-12 p-2   rounded-full'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'></path>
            </svg>
            <span className='text-2xl'>Links</span>
          </a>
        </Link>
        <nav className='md:ml-auto flex text-base  justify-between md:justify-center w-full md:w-auto'>
          {user && (
            <div className='flex '>
              <nav className='-mt-3 md:mt-1'>
                <div className='flex items-center space-x-5'>
                  <button
                    onClick={() => signOut()}
                    className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
                    Logout
                  </button>
                </div>
              </nav>

              <div>
                {user?.image ? (
                  <img
                    alt='profile'
                    className='rounded-full w-10 h-10 ml-5'
                    src={user.image}
                  />
                ) : (
                  <div className='rounded-full w-12 h-12 animate-pulse bg-gray-300'></div>
                )}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
