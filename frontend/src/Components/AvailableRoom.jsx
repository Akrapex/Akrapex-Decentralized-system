
import { Link } from 'react-router-dom';
import { availableRoomData } from '../Constants/availableRoomData';

const AvailableRoom = () => {
  return (
    <div className="">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between ">
          <h4 className="text-5xl text-secondary font-bold">Available Rooms</h4>
          <Link to="/marketplace">
            <button className="text-xl text-white font-medium font-inter bg-yellow py-3 px-8 rounded-[20px] my-10 ">
              Create A Room
            </button>
          </Link>
        </div>
        <div className=" grid grid-cols-2 justify-center gap-y-20 items-center m-auto mb-20">
          {availableRoomData.map(
            ({
              id,
              title,
              location,
              heading,
              image,
              attendance,
              posts,
              activity,
              name,
            }) => (
              <div
                key={id}
                className="shadow-lg rounded-lg w-[587px] h-[387px] px-10 text-secondary border border-gray-300 py-6"
              >
                <div className="bg-[#254F6A66]  w-[75px] h-[75px]"></div>
                <div  className='space-y-5'>
                  <h5 className="text-[2rem] font-medium">{title}</h5>
                  <p className=" text-base">{location}</p>
                  <p className="text-xl font-normal">{heading}</p>
                  <div className="text-xl font-normal text-secondary grid grid-cols-2 items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={image} alt={attendance} className="w-5" />
                      <p>
                        {attendance}
                      </p>
                    </div>
                    <p className='ml-20'>{posts}</p>
                    <p className='pt-5 '>{activity}</p>
                    <button className='border border-gray-300 py-2 px-3 rounded-[20px] w-[173px] mt-4 ml-10 bg-primary text-white'>{name}</button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default AvailableRoom
