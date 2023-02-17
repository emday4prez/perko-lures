import { Inter } from '@next/font/google';
import Hero from '@/components/Hero';
import PictureGrid from '@/components/PictureGrid';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PictureGrid />
      </main>
    </>
  );
}
