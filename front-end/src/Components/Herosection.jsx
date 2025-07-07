import React from 'react'

const Herosection = () => {
  return (
    <section className=" bg-primary py-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center pt-10">
          <h1 className="text-[4.625rem] font-bold font-Grotesk text-white">
            Find Your Perfect Property
          </h1>
          <h3 className="text-[2rem] font-inter font-normal w-[700px] mx-auto text-[#FFFFFFB2] tracking-tighter">
            Discover, buy, sell, and rent properties with intelligent matching
            and verified professionals
          </h3>
        </div>
        <div className="bg-white shadow-md rounded-2xl w-[1238px] px-10 py-12 my-10">
          <div className="flex items-center gap-6">
            <div>
              <h4 className="text-2xl font-inter font-normal pb-2">Location</h4>
              <div className="w-[310px] border border-secondary pt-4 rounded-[12px]">
                <img
                  src="/Images/search-icon.svg"
                  alt="search-icon"
                  className="w-[44px] ml-4 py-2"
                />
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-inter font-normal pb-2">
                Property Type
              </h4>
              <div className="w-[259px] border border-secondary pt-4 rounded-[12px]">
                <img
                  src="/Images/protoype.svg"
                  alt="search-icon"
                  className="w-[25px] ml-56 py-6"
                />
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-inter font-normal pb-2">
               Price Range
              </h4>
              <div className="w-[259px] border border-secondary pt-4 rounded-[12px] flex items-center gap-32 px-4">
                <p className="text-xl text-secondary font-normal">1m-4m</p>
                <img
                  src="/Images/protoype.svg"
                  alt="search-icon"
                  className="w-[25px] py-6"
                />
              </div>
            </div>
            <div className='mt-10'>
              <div className="w-[259px] border border-secondary pt-4 rounded-[12px] flex items-center gap-20 px-4">
                <img
                  src="/Images/search-icon.svg"
                  alt="search-icon"
                  className="w-[45px] py-2"
                />
                <p className="text-xl text-secondary font-normal">Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection
