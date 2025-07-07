

const BuildersAndBelivers = ({title, description}) => {
  return (
    <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between py-28">
      <div className="py-40">
        <p className="text-primary text-[2.813rem] font-medium w-[550px] font-Grotesk leading-none">
          {title}
        </p>
        <p className="text-[1.75rem] font-normal font-inter text-primary w-[550px] pt-7">
          {description}
        </p>
        <button className="text-xl text-white font-medium font-inter bg-yellow py-2 px-10 rounded-[20px] mt-20">
          View all properties
        </button>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          <div className="bg-[#254F6A33] w-[330px] h-[374px]  py-20 px-5 rounded-[10px]">
            <img
              src="/Images/accessOwership.svg"
              alt="access-ownership"
              className="ml-28 py-6 text-yellow"
            />
            <h3 className="text-[1.625rem] font-semibold font-inter text-primary">
              Accessible Ownership
            </h3>
            <p className="text-xl font-normal w-[284px] text-primary">
              Start with just a few dollars and own a share of real,
              income-generating property
            </p>
          </div>
          <div className="bg-[#254F6A33] w-[330px] h-[374px]  py-20 px-5 rounded-[10px] mt-10">
            <img
              src="/Images/ecoFirst.svg"
              alt="eco-first"
              className="ml-28 py-6"
            />
            <h3 className=" text-[1.625rem] font-semibold font-inter">
              Eco-First Focus
            </h3>
            <p className="text-xl font-normal w-[284px] text-primary">
              Every building is selected or upgraded with sustainability at its
              core
            </p>
          </div>
          <div className="bg-[#254F6A33] w-[330px] h-[374px]  py-20 px-5 rounded-[10px]">
            <img
              src="/Images/noBanks.svg"
              alt="access-ownership"
              className="ml-28 py-6"
            />
            <h3 className=" text-[1.625rem] font-semibold font-inter">
              No Banks, No Barriers
            </h3>
            <p className="text-xl font-normal w-[284px] text-primary">
              Buy, earn, and vote directly through your wallet—simple, secure,
              and global
            </p>
          </div>
          <div className="bg-[#254F6A33] w-[330px] h-[374px]  py-20 px-5 rounded-[10px] mt-10">
            <img
              src="/Images/communityPowred.svg"
              alt="access-ownership"
              className="ml-28 py-6"
            />
            <h3 className="text-primary text-[1.625rem] font-semibold font-inter">
              Community Powered
            </h3>
            <p className="text-xl font-normal w-[284px]">
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
