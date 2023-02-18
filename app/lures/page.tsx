'use client';

import { CldImage } from 'next-cloudinary';
function Lures() {
  return (
    <div className='flex flex-col items-center'>
      <h1>Lures</h1>
      <p>Here you can find all the lures you need.</p>

      <div className='max-w-6xl grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  '>
        <div>
          <CldImage
            src='https://res.cloudinary.com/dfyd1vtup/image/upload/v1676697860/perko/Grid_search_set-removebg_jqedsp.png'
            alt=''
            width={250}
            height={250}
          />
        </div>
        <div>
          <CldImage
            src='https://res.cloudinary.com/dfyd1vtup/image/upload/v1676698013/perko/Hitman_set-removebg-preview_yegvpd.png'
            alt=''
            width={250}
            height={250}
          />
        </div>
        <div>
          <CldImage
            src='https://res.cloudinary.com/dfyd1vtup/image/upload/v1676591194/perko/Pick_Pocket_q4z92z.jpg'
            alt=''
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
}

export default Lures;
