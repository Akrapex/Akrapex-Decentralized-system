
import { paymentData } from '../Constants/paymentData'

const SUbstainableRealestate = () => {
  return (
    <>
      <div className="bg-primary py-40 text-white">
        <div className="max-w-[1440px] w-full mx-auto ">
          <h2 className="text-[4rem]  font-bold font-Grotesk  leading-none text-center  m-auto w-[1284px]">
            We make it easy to invest in sustainable real estate from anywhere
          </h2>
          <p className="text-[1.625rem]  font-normal font-inter text-center  m-auto w-[738px] pt-6 text-[#FFFFFF99]">
            All you need is your phone or wallet to start owning a piece of
            verified green property.
          </p>
          {paymentData.map(({ id, image, title, description, }) => (
            <div
              key={id}
              className="bg-primary border border-[#00C2FF] w-[1223px] flex gap-10 py-4 px-8 rounded-lg mt-12"
            >
              <div>
                <img src={image} alt="connectWallect" />
              </div>
              <div>
                <h3 className="text-[2rem] font-bold font-Grotesk">{title}</h3>
                <p className="text-xl font-inter w-[806px] pt-2 text-[#FFFFFF99]">
                  {description}
                </p>
                {/* <ul className="list-disc ml-5 text-xl font-normal text-[#FFFFFF99] pt-4 space-y-2">
                  
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SUbstainableRealestate
