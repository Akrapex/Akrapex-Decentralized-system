import React from 'react'

const FeaturedProperties = ({ progress }) => {
  return (
    <div>
      <h2 className="text-5xl font-bold font-Grotesk">Featured Properties</h2>
      <div className="flex items-center justify-between">
        <p className="text-[1.625rem] w-[806px] text-light">
          Own with peace of mind , these properties are secured by smart
          contracts. No middleman, just transparency and trust
        </p>
        <button className="text-xl text-white font-medium font-inter bg-tertiary py-3 px-8 rounded-[20px] mt-10">
          View all properties
        </button>
      </div>
      <div>
        <div className="rounded-xl bg-white w-[587px] mt-16">
          <img src="/src/assets/Images/house3.svg" alt="house3" />
          <div className="flex items-center justify-between px-3">
            <p className="text-[#0A0A23] text-2xl w-[288px] font-medium py-5">
              150 ETH 5 bedroom detached duplex,osapa lekki lagos
            </p>
            <p className="text-[#E5BD3E] text-xl font-bold">
              12.7% Annual yeild
            </p>
          </div>
          <div className="flex justify-between items-center px-4 pt-6">
            <p className="text-xl text-[#0A0A23] font-bold">
              Tokennized progress:
            </p>
            <span className="text-[#E5BD3E] text-xl font-bold">50%</span>
          </div>
          <div className="w-[560px] h-2 rounded-full bg-[#296B8299] mx-5">
            <div
              className="h-full rounded-full bg-[#0A0A23] transition-all duration-300  w-[220px] mt-4 mx-7"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className=" text-center mx-auto pb-8">
            <button className="text-xl text-tertiary  font-medium font-inter py-2 px-6 rounded-[20px] mt-10 ml-6  border hover:bg-tertiary  border-tertiary">
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties
