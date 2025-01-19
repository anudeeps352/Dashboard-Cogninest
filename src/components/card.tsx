import React from 'react';
import Avatar from './avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
type cardProps = {
  imagelink: string;
  name: string;
  role: string;
  skillRating: number;
  credit: number;
  description: string;
};
export default function Card(cardItem: cardProps) {
  //TODO:
  // avatar icon
  // skills icon
  // download bar
  // outer checkerbox
  // content of people
  // fetch content from a json
  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <div className="bg-white shadow-sm shadow-slate-400 rounded-lg w-full grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]  px-4 py-6 gap-12 ">
        <div className="flex justify-start items-center gap-2">
          <div className="h-8 w-8 ">
            <Avatar src={cardItem.imagelink}></Avatar>
          </div>
          <div className="flex flex-col">
            <h2>{cardItem.name}</h2>
            <h3>{cardItem.role}</h3>
          </div>
        </div>
        <div className="flex min-w-40">{cardItem.description}</div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <div className="w-8 h-2 bg-blue-700 rounded-lg"></div>
            <h3 className="font-bold">Skills</h3>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: cardItem.skillRating }).map((_, index) => (
              <div
                className="w-7 h-7 rounded-full bg-blue-600 flex justify-center items-center"
                key={index}
              >
                <div className="bg-white md:w-4 md:h-4 w-3 h-3"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 w-60 md:w-72 h-12 px-2 md:px-4 text-white justify-center flex items-center gap-2 text-xs md:text-base">
            <FontAwesomeIcon icon={faDownload} className="h-4" />
            Download for {cardItem.credit} credits
          </div>
          <button className="w-6 h-6  bg-blue-700 rounded-sm md:rounded-lg flex justify-center items-center">
            <div className="w-3 h-0.5  bg-white"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
