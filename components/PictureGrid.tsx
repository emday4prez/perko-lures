import Image from 'next/image'
import React from 'react'

function PictureGrid() {
  return (
    <div className='grid grid-cols-2'>
     <Image alt='fisherman with large fish' />
     <Image src={} alt='fisherman with large fish' height={50} width={50} />
     <Image alt='fisherman with large fish' />
     <Image alt='fisherman with large fish' />
    </div>
  )
}

export default PictureGrid