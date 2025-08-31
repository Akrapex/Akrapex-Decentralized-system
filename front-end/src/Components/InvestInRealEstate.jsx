import BuildersAndBelivers from "./BuildersAndBelivers";
import DontJustInvest from "./DontJustInvest";
import FeaturedProperties from "./FeaturedProperties";
import Footer from "./Footer";
import JoinMovement from "./JoinMovement";
import NavBar from "./Layouts/NavBar";
import ReadyToStart from "./ReadyToStart";
import RealEstateBlockchain from "./RealEstateBlockchain";
import SUbstainableRealestate from "./SUbstainableRealestate";
import Fadein from "./Animation/fadein";

const InvestInRealEstate = () => {
  return (
    <Fadein>
      <section className="max-w-full overflow-hidden">
        <div className="bg-primary text-white border-b border-tertiary w-full">
          <div className=" md:w-[90%] mx-auto  py-8">
            <RealEstateBlockchain />
          </div>
        </div>
        <div className="bg-white ">
          <FeaturedProperties />
          <SUbstainableRealestate />
          <div className="md:w-[90%] m-auto">
            <BuildersAndBelivers
              title="Where Builders, Believers, and Change-Makers Invest Differently"
              description=" Whether you’re a renter, an investor, or a builder, this platform is
          for anyone who wants to own real estate sustainably, without the usual
          barriers. And here is what makes our platform differernt"
            />
          </div>
        </div>
        {/* <DontJustInvest />
        <ReadyToStart /> */}
      </section>
    </Fadein>
  );
};

export default InvestInRealEstate;
