import React from 'react'

const RealEstateBlockchain = () => {
  return (
    <div className="my-40 ">
      <h2 className="text-[#00C2FF] text-xl font-medium rounded-full py-2 px-4 w-[430px] bg-[#00C2FF33] mb-7">
        Revolutionizing Real Estate With Blockchain
      </h2>
      <div className="flex relative">
        <div className="space-y-5">
          <h3 className="text-5xl font-bold font-Grotesk w-[827px]">
            Own a piece of the future{" "}
            <span className="text-5xl font-bold bg-gradient-to-r from-[#34D48E] to-[#2C4EFE] text-transparent bg-clip-text">
              sustainably
            </span>{" "}
            on blockchain
          </h3>
          <p className="text-[1.625rem] text-light w-[658px]">
            Invest in sustainable real estate, earn rewards, and influence
            what’s built next, all powered by web3 technology
          </p>
          <button className="text-xl text-white font-medium font-inter bg-tertiary py-3 px-12 rounded-[20px] mt-10">
            Browse properties
          </button>
          <button className="text-2xl text-tertiary font-medium font-inter py-2 px-9 rounded-[20px] mt-10 ml-6  border hover:bg-tertiary  border-tertiary">
            Learn how it works
          </button>
          <div className="flex items-center gap-[10%] mt-5">
            <div className="text-xl font-medium flex gap-3">
              <img
                src="/src/assets/Images/yellow-cirlce.svg"
                alt="yellow-circle"
              />
              <p className="">Blockchain verified</p>
            </div>
            <div className="text-xl font-medium flex gap-3">
              <img
                src="/src/assets/Images/yellow-cirlce.svg"
                alt="yellow-circle"
              />
              <p className="">100% Secured</p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="/src/assets/Images/house1.svg"
            alt="house1"
            className="absolute bottom-[40%]"
          />
          <img
            src="/src/assets/Images/house2.svg"
            alt="house2"
            className="absolute top-20 right-8"
          />
        </div>
        <button className="text-xl text-white font-medium font-inter bg-tertiary py-3 px-12 rounded-full mt-8 absolute -top-[55%] right-8">
          Tokenized property 3.5 ETH
        </button>
      </div>
    </div>
  );
}

export default RealEstateBlockchain
