'use client';
import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Search() {
  return (
    <div className="flex w-[60%] md:w-[40%] justify-center items-center">
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 rounded-full px-4"
        />
        <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none w-14 ">
          <FontAwesomeIcon icon={faMagnifyingGlass} width="10px" />
        </button>
      </div>
    </div>
  );
}
