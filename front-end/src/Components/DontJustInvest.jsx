import React from "react";
import bgInvest from "/Images/bg.invest.svg"; // adjust path if needed

const DontJustInvest = () => {
  return (
    <section
      className="py-48 relative bg-primary" // increased padding more
      style={{
        clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)",
      }}
    >
      <div className="max-w-[1440px] w-full mx-auto relative px-4">
        {/* Decorative background image */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            transform: "translateY(-50%)",
            right: "-10rem",
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          <img
            src={bgInvest}
            alt=""
            className="w-[300px] sm:w-[450px] opacity-80"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-Grotesk text-white text-center relative z-10">
          Don’t just invest, stay informed
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-inter text-white max-w-2xl text-center mx-auto relative z-10">
          Help decide on upgrades, improvements, and how community funds are used.
        </p>

        {/* Form */}
        <div className="flex justify-center items-center mt-12 relative z-10">
          <form className="flex w-full max-w-lg rounded-full bg-white overflow-hidden shadow-md">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="youremail@gmail.com"
              className="flex-1 px-4 py-3 text-base sm:text-lg text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 sm:px-10 py-3 text-sm sm:text-base md:text-lg font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none transition"
            >
              Start investing
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DontJustInvest;
