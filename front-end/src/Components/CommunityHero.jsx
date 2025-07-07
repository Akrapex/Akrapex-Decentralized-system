import React from 'react'

const CommunityHero = () => {
  return (
    <section className=" bg-white text-secondary ">
      <div className="max-w-[1440px] mx-auto shadow-lg my-10">
        <div className="text-center pt-10">
          <h1 className="text-[4.625rem] font-bold font-Grotesk text-secondary">
            Community Hub
          </h1>
          <h3 className="text-[2rem] font-inter font-normal w-[978px] mx-auto text-secondary tracking-tighter">
            Connect with like-minded professionals, share experiences, and grow
            your network in the real estate community.
          </h3>
          <div className="w-[1212px] border border-gray-300 rounded-[12px] flex items-center py-2 px-6 gap-6 mt-10 text-center m-auto">
            <img
              src="/Images/search-icon.svg"
              alt="search-icon"
              className="pt-4"
            />
            <input
              type="text"
              placeholder="Search for discussions, rooms, or members......."
              className="text-xl font-medium  text-secondary font-inter w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunityHero
