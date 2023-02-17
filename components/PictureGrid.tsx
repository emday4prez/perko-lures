import Image from 'next/image';
import Link from 'next/link';
function PictureGrid() {
  return (
    <div className='grid grid-cols-2 gap-1 place-items-center'>
      <div className='place-items-center'>
        <Image
          className='rounded-xl grid-item'
          src='https://res.cloudinary.com/dfyd1vtup/image/upload/v1676591305/perko/muskie_catch_999.jpg'
          alt='fisherman with large fish'
          height={250}
          width={250}
        />
      </div>
      <div className='place-items-center'>
        <Image
          className='rounded-xl grid-item'
          src='https://res.cloudinary.com/dfyd1vtup/image/upload/v1676591431/perko/muskie_catch_732.jpg'
          alt='fisherman with large muskie fish'
          height={250}
          width={250}
        />
      </div>
      <div className='place-items-center'>
        <Image
          className='rounded-xl grid-item h-auto'
          src='https://res.cloudinary.com/dfyd1vtup/image/upload/v1676591206/perko/muskie_catch1.jpg'
          alt='fisherman with large fish'
          width={250}
          height={250}
        />
      </div>
      <div className='place-items-center'>
        <Image
          className='rounded-xl grid-item h-auto'
          src='https://res.cloudinary.com/dfyd1vtup/image/upload/v1676591210/perko/muskie_catch2.jpg'
          alt='fisherman with large fish'
          height={250}
          width={250}
        />
      </div>
    </div>
  );
}

export default PictureGrid;
