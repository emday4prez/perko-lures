'use client';

import { CldImage } from 'next-cloudinary';
function Lures() {
  return (
    <div className='flex flex-col items-center'>
      <h1>Lures</h1>
      <p>Here you can find all the lures you need.</p>

      <CldImage
        src='https://res.cloudinary.com/dfyd1vtup/image/upload/v1676591213/perko/Hitman_set_xb7w0d.jpg'
        alt=''
        width={250}
        height={250}
      />

      <div className='max-w-6xl grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  '></div>
    </div>
  );
}

export default Lures;
