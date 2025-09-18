'use client';
import React, { useRef, useState, type FC } from 'react';
import { motion, MotionConfig } from 'motion/react';
import useClickOutside from '../../hooks/useClickOutside';
import { Search, X } from 'lucide-react';
import Button from '../Inputs/Button';

const transition = {
  type: 'spring',
  bounce: 0.1,
  duration: 0.4,
};



const SearchBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setIsOpen(false);
  });

  return (
    <MotionConfig transition={transition}>
      <div ref={containerRef}>
        <motion.div
          animate={{
            width: isOpen ? '300px' : '130px',
          }}
          initial={false}
        >
          <div className='overflow-hidden p-2'>
            {!isOpen ? (
              <div className='flex space-x-2'>
                <Button onClick={() => setIsOpen(true)} ariaLabel='Search notes' className='relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none'>
                  <Search className='h-7 w-7' />
                </Button>
              </div>
            ) : (
              <div className='flex space-x-2'>
                <div className='relative w-full'>
                  <input
                    className='h-9 w-full border-b-1 border-zinc-800 bg-transparent p-2 text-zinc-900 placeholder-zinc-500 focus:outline-hidden'
                    autoFocus
                    placeholder='Search fragrance'
                  />
                </div>
                <Button onClick={() => setIsOpen(false)} ariaLabel='Back' className='relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none'>
                  <X className='h-5 w-5' />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default SearchBar;
