
import { BedroomApartment } from "../Constants/propertiesData";

const Apartments = () => {
  return (
    <div className="grid grid-cols-2 gap-10  h-[351px]">
      {BedroomApartment.map(
        ({
          id,
          location,
          amount,
          title,
          detials,
          visit,
          image,
          pool,
          parking,
          person,
        }) => (
          <div className="rounded-xl shadow-lg" key={id}>
            {/* ✅ House image (if from public folder, fix path) */}
            <img
              src="/Images/3BedRoom.svg" // ✅ Use /Images not /src/assets...
              alt="house"
              className=""
            />

            <div className="px-3">
              <p className="text-[#0C9241] text-xl font-normal pt-4">
                {amount}
              </p>
              <p className="text-secondary text-2xl w-[288px] font-normal py-5">
                {location}
              </p>
              <p className="text-secondary pb-3">{detials}</p>
              <button className="text-secondary rounded-[12px] py-2 px-6 border border-gray-300 text-[0.938rem] font-medium bg-[#F5F8F4]">
                {parking}
              </button>
              <button className="text-secondary rounded-[12px] py-2 px-10 ml-6 border border-gray-300 text-[0.938rem] font-medium bg-[#F5F8F4]">
                {pool}
              </button>
              <div className="flex items-center gap-3">
                <img src={person} alt={person} className="w-6 pt-2"/>
                <p className="text-xl text-secondary font-medium pt-2">{title}</p>
              </div>
            </div>

            <div className="flex items-center pb-2 gap-3">
              <button className="text-xl text-white font-medium py-2 px-6 rounded-[20px] mt-10 ml-3 border bg-primary w-[193px]">
                {visit}
              </button>

              {/* ✅ ICONS from the image array */}
              <div className="flex gap-3 items-center pt-10">
                {image.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`icon-${index}`}
                    className=" border border-gray-300 py-2 px-2 rounded-[15px]"
                  />
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Apartments;
