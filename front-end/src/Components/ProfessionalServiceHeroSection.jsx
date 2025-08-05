import React from 'react'

const ProfessionalServiceHeroSection = () => {
  return (
    <section className=" bg-white text-secondary ">
      <div className="max-w-[1440px] mx-auto my-10 py-20">
        <div className="text-center pt-10">
          <h1 className="text-[4.625rem] font-bold font-Grotesk text-secondary">
            Professional Services Directory
          </h1>
          <h3 className="text-[2rem] font-inter font-normal w-[978px] mx-auto text-secondary tracking-tighter">
            Connect with verified professionals for all your property
            maintenance and service needs
          </h3>
          <div className="w-[1212px] border border-gray-300 rounded-[12px] flex items-center py-2 px-6 gap-6 mt-10 text-center m-auto">
            <img
              src="/Images/search-icon.svg"
              alt="search-icon"
              className="pt-4"
            />
            <input
              type="text"
              placeholder="Search for courses...."
              className="text-xl font-medium  text-secondary font-inter w-full"
            />
          </div>
        </div>
        <div className="text-xl font-medium font-Grotesk flex items-center justify-between pt-20">
          <button className="bg-primary text-white px-8  py-3 rounded-[20px]">
            All Service
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-[20px] text-secondary">
            Plumbing
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-[20px] text-secondary">
            Construction
          </button>
          <button
            className="border border-gray-300 px-6 py-3 rounded-[20px]
            text-secondary"
          >
            Electrical
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-[20px] text-secondary">
            Cleaning
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-[20px] text-secondary">
            Security
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalServiceHeroSection
