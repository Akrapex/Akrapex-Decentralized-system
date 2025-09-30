import React from "react";

const ReadyToStart = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto py-20 px-4 text-primary">
      <h2 className="text-3xl sm:text-5xl font-bold font-Grotesk leading-tight max-w-4xl">
        Ready to start investing in the future of real estate
      </h2>

      <p className="mt-6 text-lg sm:text-2xl text-secondary font-inter max-w-3xl">
        Real estate should be transparent, green and owned by everyone, ready to
        make sustainable living accessible by all?
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <button className="text-xl text-white font-medium font-inter bg-yellow py-3 px-12 rounded-[20px] transition duration-300 hover:bg-yellow/80">
          Connect Wallet
        </button>
        <button className="text-xl text-yellow font-medium font-inter py-3 px-9 rounded-[20px] bg-white border border-yellow transition duration-300 hover:bg-yellow hover:text-white">
          Schedule a demo
        </button>
      </div>

      <img
        src="/Images/realEstate-House.svg"
        alt="Real estate house illustration"
        className="mt-10"
      />
    </div>
  );
};

export default ReadyToStart;
