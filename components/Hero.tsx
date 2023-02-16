'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Image from 'next/image'
import logo from '../public/logo.jpg'
function Hero() {
  return (
    <div>
          <Parallax className='bg-zinc-50' style={{ top: '0', left: '0' }} pages={2}>
      <ParallaxLayer  className='min-h-screen bg-gradient-to-tr from-slate-800 via-slate-900 to-zinc-800 flex justify-center items-center' offset={0}  speed={0.5}>
       <Image placeholder="blur" className='rounded-xl' src={logo} width={500}
      height={500} alt='logo'></Image>
      </ParallaxLayer>
      <ParallaxLayer offset={.99} speed={2}>
        
          <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between bg-orange-500'>
            <h2 className='text-3xl p-6 font-extrabold tracking-tight text-slate-900 sm:text-4xl'>
              <span className='block'>Want to catch bigger fish?</span>
            
            </h2>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className='bg-zinc-50 flex flex-col justify-center items-center' offset={.9999} speed={.2}>
        <h2 className='text-3xl p-6 pt-32 font-extrabold tracking-tight text-slate-900 sm:text-4xl'>   <span className='text-slate-900'>Use bigger bait.</span></h2>
       <h2 className='text-3xl p-6 pt-48 font-extrabold tracking-tight text-slate-900 sm:text-4xl'>   <span className=' text-slate-900'>Perko Lures</span></h2>
        <p>handcrafted, extra large fishing lures designed to catch the biggest freshwater fish. Each lure is carefully crafted to perfection, ensuring that it is not only effective but also visually appealing to attract the biggest fish. Perko Lures is dedicated to providing anglers with the best tools to make their fishing experience both exciting and successful.</p>
      </ParallaxLayer>
    

    </Parallax>
    </div>

  )
}

export default Hero