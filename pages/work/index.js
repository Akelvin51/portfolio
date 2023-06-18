import React from 'react';

// next image
import Image from 'next/image';

// components
import TopLeftImg from '../../components/TopLeftImg';
import BottomRightImg from '../../components/BottomRightImg';
import WorkSlider from '../../components/WorkSlider';

// import motion
import { motion } from 'framer-motion';

// import variants
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 text-white flex items-center'>
      <TopLeftImg />
      <BottomRightImg />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='flex flex-col text-center lg:text-left mb-4 xl:mb-0 pt-6'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className='h2 xl:mt-8'
            >
              My work<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit maiores facere officiis labore ullam.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className='w-full xl:max-w-[65%]'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      {/* bulb */}
      <div className='absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge duration-75 animate-pulse'>
        <Image src={'/bulb.png'} width={260} height={200} />
      </div>
    </div>
  );
};

export default Work;
