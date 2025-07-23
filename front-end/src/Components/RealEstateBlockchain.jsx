import { Link } from "react-router-dom";

const RealEstateBlockchain = () => {
  return (
    <div className="my-40 w-full">
      <h2 className="text-[#00C2FF] text-xs lg:text-lg  font-medium rounded-full py-2 px-4 w-[fit-content] bg-[#00C2FF33] ml-5 mb-7">
        Revolutionizing Real Estate With Artificial Intelligence
      </h2>
      <div className="flex relative flex-wrap lg:flex-nowrap w-full justify-evenly">
        <div className="space-y-5 w-[90%] mx-auto lg:w-5/12  text-wrap">
          <h3 className="text-5xl font-bold font-Grotesk text-wrap">
            Akrapex: The Future of Real Estate is Here
          </h3>
          <p className="text-lg text-light w-full text-wrap ">
            A platform that connects every player in the property game, from
            developers to tenants, into one powerful ecosystem. Search, invest,
            co-own, and manage real estate smarter.
          </p>
          <Link to="marketPlace">
            <button className="block md:inline-block  text-white font-medium font-inter bg-yellow py-2 px-8 rounded-[20px] mt-10">
              Join waitlist
            </button>
          </Link>
          {/* <button className="block md:inline-block  text-yellow font-medium font-inter py-2 px-9 rounded-[20px] mt-10 md:ml-6  border hover:bg-tertiary  border-yellow">
            Learn how it works
          </button> */}
        </div>
        <div className=" lg:w-3/6 relative w-[90%] mx-auto mt-10">
          <img
            src="/Images/house1.svg"
            alt="house1"
            className="lg:absolute bottom-[40%] w-[80%] lg:w-[400px]"
          /> 
          <img
            src="/Images/house2.svg"
            alt="house2"
            className="absolute top-20 right-8 w-[80%] lg:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default RealEstateBlockchain;
