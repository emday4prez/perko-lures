'use client';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.jpg';
import PictureGrid from './PictureGrid';
function Hero() {
  return (
    <div>
      <Parallax
        className='bg-zinc-50'
        style={{ top: '0', left: '0' }}
        pages={3}
      >
        <ParallaxLayer
          className='border-2 border-pink-900 min-h-screen bg-gradient-to-tr from-slate-800 via-slate-900 to-zinc-800 flex justify-center items-center'
          offset={0}
          speed={0.5}
        >
          <Image
            placeholder='blur'
            className='rounded-xl'
            src={logo}
            width={500}
            height={500}
            alt='logo'
          ></Image>
        </ParallaxLayer>
        <ParallaxLayer offset={0.999} speed={5}>
          <div className='max-w-7xl z-10 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:justify-between lg:items-center bg-orange-500'>
            <h2 className='text-3xl p-6 font-extrabold tracking-tight text-slate-900 sm:text-4xl'>
              <span className=''>Want to catch bigger fish?</span>
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className='bg-zinc-50 border border-red-700 flex flex-col justify-center items-center'
          offset={0.9999}
          speed={0.2}
        >
          <h3 className='p-6 pt-32 font-extrabold tracking-tight text-slate-900 sm:text-4xl'>
            {' '}
            <span className='text-slate-900 text-7xl'>Use bigger bait.</span>
          </h3>
          <div className='bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700  text-zinc-100'>
            <h2 className='text-6xl p-6 pt-48 font-extrabold tracking-tight text-slate-100 sm:text-4xl'>
              {' '}
              <span className=' text-slate-100'>Perko Lures</span>
            </h2>
            <p className='pb-8 lg:px-48 md:text-xl lg:text-2xl px-2 md:px-24'>
              Handcrafted, extra large fishing lures designed to catch the
              biggest fish. Each lure is carefully crafted to perfection,
              ensuring that it is not only effective but also visually appealing
              to attract the biggest fish. Perko Lures is dedicated to providing
              anglers with the best tools to make their fishing experience both
              exciting and successful.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className='bg-zinc-50' offset={2} speed={0.1}>
          <PictureGrid />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={3} className='bg-slate-800 pt-5'>
          <div className='max-w-xl z-10 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between bg-orange-500 rounded shadow-2xl'>
            <h2 className='text-3xl text-center p-6 font-extrabold tracking-tight text-slate-900 sm:text-4xl'>
              <span className='text-center'>CHECK OUT OUR LURES</span>
            </h2>
          </div>
          <p className='text-center pt-12 text-slate-50'>
            &copy; {new Date().getFullYear()} Perko Lures. All rights reserved.{' '}
            <Link className='underline hover:text-zinc-300' href='/privacy'>
              Privacy Policy
            </Link>
          </p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Hero;
