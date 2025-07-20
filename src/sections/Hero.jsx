import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../components/CanvasLoader';
import { Leva } from 'leva';
import { PerspectiveCamera } from '@react-three/drei';
import HeroCamera from '../components/HeroCamera';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const ukuran = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-lg font-medium text-white text-center font-generalsans">
          Halo Semuanya, Saya Hakim <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Membangun product & brand</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera></HeroCamera>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
