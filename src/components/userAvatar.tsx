'use client';

import React, { useState } from 'react';
import user from '../../public/user.jpg';
import Image from 'next/image';

export default function UserAvatar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex items-center absolute right-4 top-4 md:right-8 md:top-8 lg:right-12 lg:top-12 gap-4 flex-wrap">
      <div className="flex flex-col">
        <div
          className={`${
            isVisible
              ? 'fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'
              : 'hidden'
          } transition-opacity duration-300`}
          onClick={toggleVisibility}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold text-lg">Hi, Username</h3>
            <h3 className="text-blue-600 text-sm">Credits left : 300</h3>
          </div>
        </div>
      </div>

      <div
        className="h-12 w-12 relative cursor-pointer"
        onClick={toggleVisibility}
      >
        <div className="relative top-3  aspect-square w-full h-auto rounded-lg overflow-hidden">
          <Image src={user} alt={'user logo'} fill />
        </div>
      </div>
    </div>
  );
}
