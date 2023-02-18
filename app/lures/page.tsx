import React from 'react';

function Lures() {
  return (
    <div className='flex flex-col items-center'>
      <h1>Lures</h1>
      <p>Here you can find all the lures you need.</p>
      <div className='max-w-6xl grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  '>
        <div className='bg-white shadow-md rounded-lg overflow-hidden grid-item'>
          <div
            className='bg-cover h-56 p-4'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1517436073-3b1b1f7e9d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
            }}
          ></div>
          <div className='p-4'>
            <h1 className='text-xl font-bold text-gray-800'>Lure 1</h1>
            <p className='mt-2 text-gray-600'>
              This is a description of the lure.
            </p>

            <div className='flex items-center mt-4'>
              <img
                className='h-8 w-8 object-cover rounded-full'
                src='https://images.unsplash.com/photo-1517436073-3b1b1f7e9d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                alt='avatar'
              />
              <h1 className='text-gray-700 font-bold ml-2'>Lure 2</h1>

              <span className='mx-1 text-gray-600'>•</span>
            </div>
          </div>
        </div>
        <div className='bg-white shadow-md rounded-lg overflow-hidden grid-item'>
          <div
            className='bg-cover h-56 p-4'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1517436073-3b1b1f7e9d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
            }}
          ></div>
          <div className='p-4'>
            <h1 className='text-xl font-bold text-gray-800'>Lure 1</h1>
            <p className='mt-2 text-gray-600'>
              This is a description of the lure.
            </p>

            <div className='flex items-center mt-4'>
              <img
                className='h-8 w-8 object-cover rounded-full'
                src='https://images.unsplash.com/photo-1517436073-3b1b1f7e9d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                alt='avatar'
              />
              <h1 className='text-gray-700 font-bold ml-2'>Lure 2</h1>

              <span className='mx-1 text-gray-600'>•</span>
            </div>
          </div>
        </div>
        <div className='bg-white shadow-md rounded-lg overflow-hidden grid-item'>
          <div
            className='bg-cover h-56 p-4'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1517436073-3b1b1f7e9d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
            }}
          ></div>
          <div className='p-4'>
            <h1 className='text-xl font-bold text-gray-800'>Lure 1</h1>
            <p className='mt-2 text-gray-600'>
              This is a description of the lure.
            </p>

            <div className='flex items-center mt-4'>
              <img
                className='h-8 w-8 object-cover rounded-full'
                src='https://images.unsplash.com/photo-1517436073-3b1b1f7e9d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                alt='avatar'
              />
              <h1 className='text-gray-700 font-bold ml-2'>Lure 2</h1>

              <span className='mx-1 text-gray-600'>•</span>
            </div>
          </div>
        </div>
        <div className='bg-white shadow-md rounded-lg overflow-hidden grid-item'>
          <div
            className='bg-cover h-56 p-4'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1517436073-3b1b1f7e9d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
            }}
          ></div>
          <div className='p-4'>
            <h1 className='text-xl font-bold text-gray-800'>Lure 1</h1>
            <p className='mt-2 text-gray-600'>
              This is a description of the lure.
            </p>

            <div className='flex items-center mt-4'>
              <img
                className='h-8 w-8 object-cover rounded-full'
                src='https://images.unsplash.com/photo-1517436073-3b1b1f7e9d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                alt='avatar'
              />
              <h1 className='text-gray-700 font-bold ml-2'>Lure 2</h1>

              <span className='mx-1 text-gray-600'>•</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lures;
