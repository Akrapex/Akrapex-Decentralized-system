import React from 'react'
import { propertiesData } from '../Constants/propertiesData';
import { powerfulFeatures } from '../Constants/powerfulFeatures';
import { Link } from 'react-router-dom';

const FeaturedProperties = ({ progress }) => {
  return (
    <div className="max-w-[1140px] mx-auto p-5">
      <h2 className="text-3xl lg:text-4xl font-bold font-Grotesk pt-10 text-primary">
        Featured Properties
      </h2>
      <div className="flex items-start justify-between flex-wrap mt-5">
        <p className="font-medium w-[806px] text-primary">
          Own with peace of mind , these properties are secured by smart
          contracts. No middleman, just transparency and trust
        </p>
        
            {/* <button className="block md:inline-block  text-white font-medium font-inter bg-yellow py-2 px-8 rounded-[20px] mt-10 lg:mt-0">
              view all properties
            </button> */}
      </div>
      <div className=" lg:flex items-center  gap-10">
        {propertiesData.map(({ id, location, profit, title, detials }) => (
          <div className="rounded-xl bg-primary lg:w-[45%] my-16" key={id}>
            <img src="/Images/house3.svg" alt="house3" />
            <div className="flex items-center justify-between px-3">
              <p className="text-white text-xl w-[288px] font-medium py-5">
                {location}
              </p>
              <p className="text-[#E5BD3E] font-bold">{profit}</p>
            </div>
            <div className="flex justify-between items-center px-4 pt-6">
              <p className="text-xl text-white font-bold">{title}</p>
              <span className="text-[#E5BD3E] font-bold">50%</span>
            </div>
            <div className="w-[90%] h-2 rounded-full bg-[#296B8299] mx-5">
              <div
                className="h-full rounded-full bg-white transition-all duration-300  w-[50%] mt-4 "/>
            </div>
            <div className=" text-center mx-auto pb-8">
                <button className=" text-yellow  font-medium font-inter py-2 px-6 rounded-[20px] mt-10 ml-6  border hover:bg-tertiary  border-yellow">
                  {detials}
                </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-40">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl font-bold">
            Powerful Features for <span className="text-green-600">Every</span>{" "}
            Stakeholder
          </h2>
          <p className="lg:text-[1.625rem] text-[#000000] w-full lg:w-[80%] text-center m-auto pb-20 mt-5">
            Experience the perfect blend of traditional real estate
            functionality with cutting-edge blockchain innovation.
          </p>
        </div>
        <div className="md:grid grid-cols-3 gap-10 mb-40 w-full">
          {powerfulFeatures.map(({ id, image, title, description }) => (
            <div
              className="text-primary border border-[#254F6A66] py-10 px-6 w-[auto] rounded-[20px] space-y-2 mb-2 md:mb-2"
              key={id}
            >
              <img
                src={image}
                alt="maerketplace"
                className="bg-[#254F6A66] p-3 rounded-xl "
              />
              <h4 className="font-semibold text-xl">{title}</h4>
              <p className="w-full font-normal">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties
