import React from 'react'
import { propertiesData } from '../Constants/propertiesData';
import { powerfulFeatures } from '../Constants/powerfulFeatures';

const FeaturedProperties = ({ progress }) => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <h2 className="text-5xl font-bold font-Grotesk pt-10 text-primary">
        Featured Properties
      </h2>
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
        {propertiesData.map(({ id, location, profit, title, detials }) => (
          <div className="rounded-xl bg-primary w-[587px] my-16" key={id}>
            <img src="/src/assets/Images/house3.svg" alt="house3" />
            <div className="flex items-center justify-between px-3">
              <p className="text-white text-2xl w-[288px] font-medium py-5">
                {location}
              </p>
              <p className="text-[#E5BD3E] text-xl font-bold">{profit}</p>
            </div>
            <div className="flex justify-between items-center px-4 pt-6">
              <p className="text-xl text-white font-bold">{title}</p>
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
      <div className="mt-40">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Powerful Features for <span className="text-green-600">Every</span>{" "}
            Stakeholder
          </h2>
          <p className="text-[1.625rem] text-[#000000] w-[909px] text-center m-auto pb-20">
            Experience the perfect blend of traditional real estate
            functionality with cutting-edge blockchain innovation.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-20 mb-40">
          {powerfulFeatures.map(({ id, image, title, description }) => (
            <div
              className="text-primary border border-[#254F6A66] py-10 px-6 w-[373px] rounded-[20px] space-y-2"
              key={id}
            >
              <img
                src={image}
                alt="maerketplace"
                className="bg-[#254F6A66] p-3 rounded-xl "
              />
              <h4 className="font-semibold text-xl">{title}</h4>
              <p className="w-[321px] text-xl font-normal">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties
