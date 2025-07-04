import React from 'react'

const DontJustInvest = () => {
  return (
    <div className=" py-20 bg-primary">
      <div className=" max-w-[1440px] w-full mx-auto h-[433px] relative mt-10">
        <div
          style={{
            position: "absolute",
            top: "23%",
            transform: "translateY(-50%)",
            right: "-14rem",
            zIndex: 0,
          }}
        >
          <img
            src="/src/assets/Images/bg.invest.svg"
            alt="bg-invest"
            className="w-[450px]"
          />
        </div>

        <h3 className="text-[4rem] font-bold font-Grotesk text-white text-center m-auto">
          Dont just invest, stay informed
        </h3>
        <p className="text-[1.625rem] font-inter text-white w-[720px] text-center m-auto">
          Help decide on upgrades, improvements, and how community funds are
          used
        </p>
        <div className="flex justify-center items-center mt-14">
          <form className="flex overflow-hidden rounded-full bg-white">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="px-4 py-3 text-xl  text-gray-700 placeholder-gray-400 focus:outline-none w-[400px]"
            />
            <button
              type="submit"
              className="px-14 py-1 text-xl font-medium text-white bg-yellow hover:bg-tertiary focus:outline-none rounded-[20px]"
            >
              Start investing
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DontJustInvest
