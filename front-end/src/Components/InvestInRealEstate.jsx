
import { buildersData } from '../Constants/buildersData';
import { paymentData } from '../Constants/paymentData';
import DontJustInvest from './DontJustInvest';
import Footer from './Footer';
import JoinMovement from './JoinMovement';
import ReadyToStart from './ReadyToStart';

const InvestInRealEstate = () => {
  return (
    <>
      <section>
        <div className="bg-secondary py-40 text-white">
          <div className="max-w-[1440px] w-full mx-auto ">
            <h2 className="text-[4rem]  font-bold font-Grotesk  leading-none text-center  m-auto w-[1284px]">
              We make it easy to invest in sustainable real estate from anywhere
            </h2>
            <p className="text-[1.625rem]  font-normal font-inter text-center  m-auto w-[738px] pt-6 text-[#FFFFFF99]">
              All you need is your phone or wallet to start owning a piece of
              verified green property.
            </p>
            <div>
              {paymentData.map(({ id, image, title, description }) => (
                <div
                  className="bg-[#1B334C] border border-[#00C2FF] w-[1223px] flex gap-10 py-4 px-8 rounded-lg mt-12"
                  key={id}
                >
                  <div>
                    <img src={image} alt="connectWallect" />
                  </div>
                  <div>
                    <h3 className="text-[2rem] font-bold font-Grotesk">
                      {title}
                    </h3>
                    <p className="text-xl font-inter w-[806px] pt-2 text-[#FFFFFF99]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between">
            <div className="py-40">
              <p className="text-white text-[2.813rem] font-medium w-[550px] font-Grotesk leading-none">
                Where Builders, Believers, and Change-Makers Invest Differently
              </p>
              <p className="text-[1.75rem] font-normal font-inter text-[#FFFFFF99] w-[550px] pt-7">
                Whether you’re a renter, an investor, or a builder, this
                platform is for anyone who wants to own real estate sustainably,
                without the usual barriers. And here is what makes our platform
                differernt
              </p>
              <button className='text-xl text-white font-medium font-inter bg-tertiary py-2 px-10 rounded-[20px] mt-40'>Learn more</button>
            </div>
            <div>
              <div  className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
                {buildersData.map(({ id, image, title, description }) => (
                  <div
                    className="bg-[#0F1932] w-[330px] h-[374px]  py-20 px-5 rounded-[10px]"
                    key={id}
                  >
                    <img
                      src={image}
                      alt="acces-ownership"
                      className="ml-28 py-6"
                    />
                    <h3 className="text-white text-[1.625rem] font-semibold font-inter">
                      {title}
                    </h3>
                    <p className="text-xl font-normal w-[284px] text-light">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <DontJustInvest/>
       <ReadyToStart/>
      </section>
      <Footer />
    </>
  );
}

export default InvestInRealEstate
