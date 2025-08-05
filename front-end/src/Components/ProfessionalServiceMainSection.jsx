import { TiStarFullOutline } from "react-icons/ti";
import { serviceprofessionalData } from "../Constants/serviceprofessionalData";

const ProfessionalServiceMainSection = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto pb-40">
      <div className="">
        <h2 className="text-[4rem] font-bold text-secondary font-Grotesk">
          Available Courses
        </h2>
        <p className="text-2xl font-normal font-inter text-secondary">
          All verified and rated by the community
        </p>
      </div>
      <div className="py-10">
        {serviceprofessionalData.map(
          ({
            image,
            title,
            subTitle,
            hours,
            location,
            price,
            chatbox,
            telephone,
            service
          }) => (
            <div className="w-[587px] shadow-xl border border-gray-300 rounded-[15px]">
              <img src={image} alt="divine-construction" />
              <div className=" px-6 py-8 space-y-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-[1.625rem] font-medium text-secondary font-Grotesk">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <TiStarFullOutline className="text-yellow" />
                    <p>{hours}</p>
                  </div>
                </div>
                <p className="text-base font-light text-secondary">
                  {subTitle}
                </p>
                <p className="text-base font-inter text-secondary">
                  {location}
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-xl font-semibold font-Grotesk">
                    Price Range:
                  </p>
                  <p className="text-xl font-semibold font-Grotesk text-primary">
                    {price}
                  </p>
                </div>
                <div className="flex gap-5">
                  <ul className="list-disc ml-5 text-xl font-normal  pt-4 space-y-2 text-[#000000B2]">
                    {Array.isArray(service) &&
                      service.map((item, id) => <li key={id}>{item}</li>)}
                  </ul>
                  {/* <button className="text-[0.938rem] font-Grotesk font-medium py-1 px-6 border border-gray-300 rounded-[12px] bg-[#F5F8F4]">
                    Residential
                  </button>
                  <button className="text-[0.938rem] font-Grotesk font-medium py-1 px-6 border border-gray-300 rounded-[12px] bg-[#F5F8F4]">
                    Commercial
                  </button>
                  <button className="text-[0.938rem] font-Grotesk font-medium py-1 px-6 border border-gray-300 rounded-[12px] bg-[#F5F8F4]">
                    Residential
                  </button> */}
                </div>
                <div className="flex justify-between items-center gap-4">
                  <button className="text-xl font-medium bg-primary text-white py-4 px-20 rounded-[15px]">
                    Hire now
                  </button>
                  <div className="flex items-center gap-4">
                    <img
                      src={chatbox}
                      alt="chatbox"
                      className="border border-gray-300 py-6 px-6 rounded-[20px] text-secondary"
                    />
                    <img
                      src={telephone}
                      alt="Telephone"
                      className="border border-gray-300 py-6 px-6 rounded-[20px] text-secondary"
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProfessionalServiceMainSection;
