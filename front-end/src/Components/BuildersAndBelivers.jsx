import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";


const BuildersAndBelivers = ({title, description}) => {
  return (
    <div className="w-full mx-auto md:flex items-start justify-between py-28">
      <div className="py-40 lg:w-8/12 p-5">
        <p className="text-primary text-3xl lg:text-5xl font-medium font-Grotesk leading-none">
          {title}
        </p>
        <p className="font-normal font-inter text-primary w-full pt-7">
          {description}
        </p>
        <Link to="https://tally.so/r/mVOPVa">
          <button className="text-white font-medium font-inter bg-yellow py-2 px-10 rounded-[20px] mt-20">
            Join waitlist <IoIosArrowRoundForward className="inline-block h-[inherit] bg-white text-black rounded-full p-1 w-auto"/>
          </button>
        </Link>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 p-5">
          <div className="bg-[#254F6A33] lg:w-11/12 h-[374px]  py-20 px-5 rounded-[10px]">
            <img
              src="/Images/accessOwership.svg"
              alt="access-ownership"
              className="ml-28 py-6 text-yellow"
            />
            <h3 className="text-[1.625rem] font-semibold font-inter text-primary">
              Accessible Ownership
            </h3>
            <p className="font-normal w-full text-primary">
              Start with just a few dollars and own a share of real,
              income-generating property
            </p>
          </div>
          <div className="bg-[#254F6A33] lg:w-11/12 h-[374px]  py-20 px-5 rounded-[10px] mt-10">
            <img
              src="/Images/ecoFirst.svg"
              alt="eco-first"
              className="ml-28 py-6"
            />
            <h3 className=" text-[1.625rem] font-semibold font-inter">
              Eco-First Focus
            </h3>
            <p className=" font-normal w-full text-primary">
              Every building is selected or upgraded with sustainability at its
              core
            </p>
          </div>
          <div className="bg-[#254F6A33] lg:w-11/12 h-[374px]  py-20 px-5 rounded-[10px]">
            <img
              src="/Images/noBanks.svg"
              alt="access-ownership"
              className="ml-28 py-6"
            />
            <h3 className=" text-[1.625rem] font-semibold font-inter">
              No Banks, No Barriers
            </h3>
            <p className="font-normal w-full text-primary">
              Buy, earn, and vote directly through your wallet—simple, secure,
              and global
            </p>
          </div>
          <div className="bg-[#254F6A33] lg:w-11/12 h-[374px]  py-20 px-5 rounded-[10px] mt-10">
            <img
              src="/Images/communityPowred.svg"
              alt="access-ownership"
              className="ml-28 py-6"
            />
            <h3 className="text-primary text-[1.625rem] font-semibold font-inter">
              Community Powered
            </h3>
            <p className=" font-normal w-full">
              No landlords, just people like you voting on what gets built,
              fixed, or improved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildersAndBelivers
