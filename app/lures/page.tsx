'use client';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
function Lures() {
  return (
    <div className='min-h-screen flex flex-col items-center bg-gradient-to-t from-slate-700 via-teal-900 to-slate-300 '>
      <Link href='/'>
        <CldImage
          src='https://res.cloudinary.com/dfyd1vtup/image/upload/c_thumb,w_200,g_face/v1676767021/perko/logo-no-bg_gn7ueu.png'
          alt='logo of fish on lure'
          width={350}
          height={250}
          className='ded-full mt-8 '
        />
      </Link>

      <h1 className='text-slate-100'>Lures</h1>
      <p className='text-zinc-50 text-lg lg:text-2xl md:px-10 p-4 lg:px-15'>
        Muskie fishing is not for the faint of heart, but with the right
        equipment, you can increase your chances of reeling in a trophy catch.
        Each lure is hand crafted with precision to mimic the natural movement
        and appearance of the muskie&rsquo;s prey.
      </p>

      <div className='max-w-6xl p-2 py-10 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3   '>
        <div className='flex flex-col text-center  items-center justify-center p-8 rounded-xl bg-slate-50 hover:bg-slate-200 transition-colors'>
          <h3 className='text-5xl font-semibold text-slate-900 drop-shadow-md'>
            Grid Search
          </h3>
          <CldImage
            src='https://res.cloudinary.com/dfyd1vtup/image/upload/c_thumb,w_200,g_face/v1676697860/perko/grid-search-set.png'
            alt=''
            width={250}
            height={250}
          />
        </div>
        <div className='flex flex-col items-center text-center  justify-center p-8 rounded-xl bg-slate-50 hover:bg-slate-200 transition-colors'>
          <h3 className='text-5xl font-semibold text-slate-900 drop-shadow-md'>
            Hitman
          </h3>
          <CldImage
            src='https://res.cloudinary.com/dfyd1vtup/image/upload/c_thumb,w_200,g_face/v1676766072/perko/hitman-set-no-bg_fmpws4.png'
            alt=''
            width={250}
            height={250}
          />
        </div>

        <div className='flex flex-col text-center items-center justify-center p-8 rounded-xl bg-slate-50 hover:bg-slate-200 transition-colors'>
          <h3 className='text-5xl font-semibold text-slate-900 drop-shadow-md'>
            Prime Suspect
          </h3>
          <CldImage
            src='https://res.cloudinary.com/dfyd1vtup/image/upload/c_thumb,w_200,g_face/v1676699007/perko/ps_tmkjvm.png'
            alt='two fishing lures'
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
}

export default Lures;
