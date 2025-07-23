
import { buildersData } from '../Constants/buildersData';


const SUbstainableRealestate = () => {
  return (
    <>
      <div className="bg-primary py-40 text-white p-5">
        <div className="max-w-[1440px] w-full mx-auto ">
          <h2 className=" font-bold font-Grotesk  leading-none text-center  m-auto w-11/12 lg:text-5xl text-3xl">
            We make it easy to invest in sustainable real estate from anywhere
          </h2>
          <p className="font-normal font-inter text-center  m-auto w-full pt-6 text-[#FFFFFF99]">
            All you need is your phone to start owning a piece of
            verified green property.
          </p>
          {buildersData.map(({ id, image, title, description, list }) => (
            <div
              key={id}
              className="bg-primary border border-[#00C2FF] m-auto md:flex gap-10 py-4 px-8 rounded-lg mt-12 w-[70%]"
            >
              <div>
                <img src={image} alt="connectWallect" />
              </div>
              <div>
                <h3 className="text-3xl font-bold font-Grotesk">{title}</h3>
                <p className="text-lg font-inter w-full pt-2 text-[#FFFFFF99]">
                  {description}
                </p>
                <ul className="list-disc ml-5  font-normal text-[#FFFFFF99] pt-4 space-y-2">
                   {Array.isArray(list) &&
                  list.map((item, id) => <li key={id}>{item}</li>)}
                </ul> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SUbstainableRealestate