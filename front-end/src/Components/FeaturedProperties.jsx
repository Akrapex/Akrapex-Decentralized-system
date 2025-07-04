import React from 'react'
import { propertiesData } from '../Constants/propertiesData';

const FeaturedProperties = ({ progress }) => {
  return (
    <div className='max-w-[1140px] mx-auto'>
      <h2 className="text-5xl font-bold font-Grotesk pt-10 text-primary">Featured Properties</h2>
      <div className="flex items-center justify-between ">
        <p className="text-[1.625rem] w-[806px] text-primary">
          Own with peace of mind , these properties are secured by smart
          contracts. No middleman, just transparency and trust
        </p>
        <button className="text-xl text-white font-medium font-inter bg-yellow py-3 px-8 rounded-[20px] mt-10">
          View all properties
        </button>
      </div>
      <div className="flex items-center  gap-10">
        {propertiesData.map(({id, location, profit, title, detials}) => (
          <div className="rounded-xl bg-primary w-[587px] my-16" key={id}>
            <img src="/src/assets/Images/house3.svg" alt="house3" />
            <div className="flex items-center justify-between px-3">
              <p className="text-white text-2xl w-[288px] font-medium py-5">
               {location}
              </p>
              <p className="text-[#E5BD3E] text-xl font-bold">
               {profit}
              </p>
            </div>
            <div className="flex justify-between items-center px-4 pt-6">
              <p className="text-xl text-white font-bold">
               {title}
              </p>
              <span className="text-[#E5BD3E] text-xl font-bold">50%</span>
            </div>
            <div className="w-[560px] h-2 rounded-full bg-[#296B8299] mx-5">
              <div
                className="h-full rounded-full bg-white transition-all duration-300  w-[220px] mt-4 "
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className=" text-center mx-auto pb-8">
              <button className="text-xl text-yellow  font-medium font-inter py-2 px-6 rounded-[20px] mt-10 ml-6  border hover:bg-tertiary  border-yellow">
              {detials}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties
