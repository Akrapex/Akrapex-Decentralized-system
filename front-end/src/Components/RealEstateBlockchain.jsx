import { Link } from "react-router-dom";

const RealEstateBlockchain = () => {
  return (
    <div className="my-40">
      <h2 className="text-[#00C2FF] text-xl font-medium rounded-full py-2 px-4 w-[430px] bg-[#00C2FF33] mb-7">
        Revolutionizing Real Estate With Blockchain
      </h2>
      <div className="flex gap-28 relative">
        <div className="space-y-5">
          <h3 className="text-5xl font-bold font-Grotesk w-[609px]">
            Akrapex: The Future of Real Estate is Here
          </h3>
          <p className="text-[1.625rem] text-light w-[658px]">
            A platform that connects every player in the property game, from
            developers to tenants, into one powerful ecosystem. Search, invest,
            co-own, and manage real estate smarter.
          </p>
          <Link to="marketPlace">
            <button className="text-xl text-white font-medium font-inter bg-yellow py-3 px-12 rounded-[20px] mt-10">
              Browse properties
            </button>
          </Link>
          <button className="text-2xl text-yellow font-medium font-inter py-2 px-9 rounded-[20px] mt-10 ml-6  border hover:bg-tertiary  border-yellow">
            Learn how it works
          </button>
        </div>
        <div className="">
          <img
            src="/Images/house1.svg"
            alt="house1"
            className="absolute bottom-[40%]"
          />
          <img
            src="/Images/house2.svg"
            alt="house2"
            className="absolute top-20 right-8"
          />
        </div>
      </div>
    </div>
  );
};

export default RealEstateBlockchain;
