import React from 'react'

const JoinMovement = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto py-20">
      <div className="text-center m-auto">
        <h3 className="text-[4rem] font-bold font-Grotesk text-[#296B82]">
          Join the Movement
        </h3>
        <p className="text-[1.625rem] font-inter text-[#296B82] w-[847px] text-center m-auto">
          Real estate should be transparent, green and owned by everyone, ready
          to make sustainable living accessible by all?
        </p>
        <div className="py-20">
          <button className="bg-[#296B82] text-white rounded-[20px] py-3 px-10 text-xl font-medium">
            Start investing
          </button>
          <button className="text-[#296B82] rounded-[20px] py-2 px-10 text-xl font-medium border border-[#296B82] ml-8">
            Start investing
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinMovement
