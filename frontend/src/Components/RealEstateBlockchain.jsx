import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const RealEstateBlockchain = () => {
  return (
    <div className="my-40 w-full">
      <h2 className="text-[#00C2FF] text-xs lg:text-lg font-medium rounded-full py-2 px-4 w-[fit-content] bg-[#00C2FF33] ml-5 mb-7">
        Revolutionizing Real Estate With Artificial Intelligence
      </h2>

      <div className="flex relative flex-wrap lg:flex-nowrap w-full justify-evenly">
        {/* Left Section */}
        <div className="space-y-5 w-[90%] mx-auto lg:w-5/12 text-wrap">
          <h3 className="text-5xl font-bold font-Grotesk text-wrap">
            Akrapex: The Future of Real Estate is Here
          </h3>
          <p className="text-lg text-light w-full text-wrap">
            A platform that connects every player in the property game, from
            developers to tenants, into one powerful ecosystem. Search, invest,
            co-own, and manage real estate smarter.
          </p>

          <Link to="https://tally.so/r/mVOPVa">
            <button className="group flex items-center gap-2 text-white font-medium font-inter bg-yellow py-2 px-5 rounded-[20px] mt-10 transition duration-300 hover:bg-yellow-600">
              Join waitlist
              <IoIosArrowRoundForward className="inline-block h-5 w-5 bg-white text-black rounded-full p-1 transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="lg:w-3/6 relative w-[90%] mx-auto mt-10">
          <img
            src="/Images/house1.svg"
            alt="house1"
            className="lg:absolute bottom-[40%] w-[80%] lg:w-[400px] transition-transform duration-500 hover:scale-105"
          />
          <img
            src="/Images/house2.svg"
            alt="house2"
            className="absolute top-20 right-8 w-[80%] lg:w-[400px] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default RealEstateBlockchain;
