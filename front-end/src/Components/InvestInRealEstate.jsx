
import BuildersAndBelivers from './BuildersAndBelivers';
import DontJustInvest from './DontJustInvest';
import Footer from './Footer';
import JoinMovement from './JoinMovement';
import ReadyToStart from './ReadyToStart';
import SUbstainableRealestate from './SUbstainableRealestate';

const InvestInRealEstate = () => {
  return (
    <>
      <section>
        <div className="bg-primary">
          <SUbstainableRealestate />
          <BuildersAndBelivers
            title="Where Builders, Believers, and Change-Makers Invest Differently"
            description=" Whether you’re a renter, an investor, or a builder, this platform is
          for anyone who wants to own real estate sustainably, without the usual
          barriers. And here is what makes our platform differernt"
          />
        </div>
        <DontJustInvest />
        <ReadyToStart />
      </section>
      <Footer />
    </>
  );
}

export default InvestInRealEstate
