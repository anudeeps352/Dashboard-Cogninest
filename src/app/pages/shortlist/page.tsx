import React from 'react';
import data from '../../../data/cv.json';
import Card from '@/components/card';
export default function shortlist() {
  return (
    <div className="w-full min-h-screen flex flex-col pt-12 justify-center">
      <h2 className="text-2xl font-bold mx-14">Shortlisted CV's</h2>
      <div className="w-[95%] mx-auto flex py-10 flex-col gap-4 ">
        {data.length > 0 ? (
          data.map((item, index) => (
            <Card
              key={index}
              imagelink={item.imageLink}
              name={item.name}
              role={item.role}
              skillRating={item.skillRating}
              credit={item.credit}
              description={item.description}
            />
          ))
        ) : (
          <h1>Nothing to display</h1>
        )}
      </div>
    </div>
  );
}
