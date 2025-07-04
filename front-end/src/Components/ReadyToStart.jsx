import React from 'react'

const ReadyToStart = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto py-20 text-primary">
      <h3 className="text-[4rem] font-bold font-Grotesk w-[1284px] leading-tight">
        Ready to start investing in the future of real estate
      </h3>
      <p className="text-[1.625rem] text-secondary w-[1272px] font-inter">
        Real estate should be transparent, green and owned by everyone, ready to
        make sustainable living accessible by all?
      </p>
      <button className="text-xl text-white font-medium font-inter bg-yellow py-3 px-12 rounded-[20px] mt-8">
        Connect Wallet
      </button>
      <button className="text-2xl text-yellow font-medium font-inter py-2 px-9 rounded-[20px] mt-8 ml-6 bg-white border hover:bg-white  border-yellow">
        Schedule a demo
      </button>
      <img
        src="/src/assets/Images/realEstate-House.svg"
        alt=""
        className="py-10"
      />
    </div>
  );
}

export default ReadyToStart
