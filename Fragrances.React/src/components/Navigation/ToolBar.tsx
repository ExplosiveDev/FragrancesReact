'use client';
import React, { type FC, useState, type MouseEvent } from 'react';
import { changeAction } from "../../store/slices/sideBarSlice"
import { motion } from 'motion/react';
import { ShoppingBasket, UserIcon } from 'lucide-react';
import SideModal from '../Sidebar/SideModal';
import { useAppDispatch } from '../../store/store';
import Button from '../Button/Button';


const ToolBar: FC = () => {
  const dispatch = useAppDispatch();

  // const handleProfileClick = async (e: React.MouseEvent<HTMLButtonElement>)

  return (
    <div>
      <div className='h-full w-full'>
        <motion.div>
          <div className='overflow-hidden p-2'>
            <div className='flex space-x-2'>
              <Button
                ariaLabel='Shopping Basket'
                className='relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none'
                onClick={async () => {dispatch(changeAction({ childrenKey: 'basket' }));}}
              >
                <ShoppingBasket className='h-7 w-7' />
              </Button>

              {/* Profile Button */}
              <Button
                ariaLabel='Profile'
                className='relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none'
                onClick={async () => {dispatch(changeAction({ childrenKey: 'login' }));}}
              >
                <UserIcon className='h-7 w-7' />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SideModal для профілю */}
      <SideModal/>
    </div>
  );
};

export default ToolBar;
