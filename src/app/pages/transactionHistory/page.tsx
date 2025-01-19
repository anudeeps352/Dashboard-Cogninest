import React from 'react';
import invoice from '../../../data/invoices.json';
export default function transactionHistory() {
  return (
    <div className="w-full min-h-screen flex flex-col pt-12 justify-center gap-4">
      <h2 className="text-base md:text-2xl font-bold mx-6 md:mx-14">
        Credits Purchase History
      </h2>
      <div className="bg-white w-[90%] self-center rounded-md">
        <div className="grid grid-cols-[1fr_3fr_3fr_3fr_3fr_2fr] items-center text-sm md:text-xl py-8 justify-items-center">
          <input
            type="checkbox"
            className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <h2 className="font-bold ">Invoice</h2>

          <h2 className="font-bold">Status</h2>
          <h2 className="font-bold">Credits</h2>
          <h2 className="font-bold">Amount</h2>
          <h2> </h2>
        </div>
        <hr className="bg-gray-400 h-[1px]" />
        {invoice.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_3fr_3fr_3fr_2fr]  items-center text-xs md:text-xl justify-items-center py-8"
            key={index}
          >
            <input
              type="checkbox"
              className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <h2 className="">{item.invoice}</h2>
            <div className="flex gap-2 items-center">
              <div
                className={`h-2 w-2  md:h-3 md:w-3 rounded-full ${
                  item.status === 'Completed' ? 'bg-green-400' : 'bg-red-400'
                }`}
              ></div>
              <h2
                className={` ${
                  item.status === 'Completed'
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {item.status}
              </h2>
            </div>
            <h2 className="">{item.credits}</h2>
            <h2 className="">{item.amount}</h2>
            <h2>. . .</h2>
            <hr className="bg-gray-400 h-[1px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
