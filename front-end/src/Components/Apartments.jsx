
import { BedroomApartment } from '../Constants/propertiesData'

const Apartments = () => {
  return (
    <div className="grid grid-cols-4 gap-10 ">
      {BedroomApartment.map(
        ({ id, location, amount, title, detials, visit, icons }) => (
          <div
            className="rounded-xl  my-16 shadow-lg"
            key={id}
          >
            <img
              src="/src/assets/Images/house3.svg"
              alt="house3"
              className=""
            />
            <div className=" px-3">
              <p className="text-[#0C9241] text-xl font-normal pt-4">
                {amount}
              </p>
              <p className="text-primary text-2xl w-[288px] font-normal py-5">
                {location}
              </p>
              <p className="text-primary gap-10">{detials}</p>
              <p className="text-xl text-primary font-medium bg-red-800">{title}</p>
            </div>
            <div className="  pb-8">
              <button className="text-xl text-white  font-medium font-inter py-2 px-6 rounded-[20px] mt-10 ml-6  border bg-primary">
                {visit}
              </button>
              <div>
                
            
              
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Apartments
