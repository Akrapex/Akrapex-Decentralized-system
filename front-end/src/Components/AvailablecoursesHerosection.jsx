import React from 'react'

const AvailablecoursesHerosection = () => {
  return (
    <section className=" bg-white text-secondary ">
      <div className="max-w-[1440px] mx-auto my-10 py-20">
        <div className="text-center pt-10">
          <h1 className="text-[4.625rem] font-bold font-Grotesk text-secondary">
            Learning Hub
          </h1>
          <h3 className="text-[2rem] font-inter font-normal w-[978px] mx-auto text-secondary tracking-tighter">
            Advance your real estate knowledge with expert-led courses, from
            beginner fundamentals to advanced investment strategies.
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
        <div className='text-xl font-medium font-Grotesk'>
          <button className='bg-primary text-white px-4 py-2 rounded-{20px}'>All Courses</button>
          <button>Property Investment</button>
          <button>Property Management</button>
          <button>Market Analysis</button>
          <button>Market Analysis</button>
        </div>
      </div>
    </section>
  );
}

export default AvailablecoursesHerosection
