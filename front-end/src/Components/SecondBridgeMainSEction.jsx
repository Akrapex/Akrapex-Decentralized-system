import React from 'react'
import { secondBridgeData } from '../Constants/secondBridgeData';
import { Link } from 'react-router-dom';

const SecondBridgeMainSEction = () => {
  return (
    <>
      <div>
        <div className="text-center m-auto">
          <h1 className="text-[3.438rem] font-bold font-Grotesk pt-10">
            Connecting the Current Real Estate World
          </h1>
          <p className="text-[2rem] font-normal text-[#000000B2] w-[799px]  m-auto pb-14">
            Building the foundation with proven technologies to solve today's
            real estate challenges
          </p>
        </div>
        <div class="bg-white rounded-[10px] flex items-center justify-between overflow-hidden shadow-md mb-40">
          <Link to="/thirdbridge">
            <button className="text-2xl font-medium font-Grotesk text-secondary ml-16">
              The Bridge
            </button>
          </Link>
          <Link to="/thirdbridge">
            <button className="text-2xl font-medium font-Grotesk text-white bg-[#296B82] py-4 px-14 rounded-[10px]">
              The Horizon
            </button>
          </Link>
          <button className="text-2xl font-medium font-Grotesk text-secondary mr-16">
            Financial Tools
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20 mb-40">
        {secondBridgeData.map(({ id, image, title, description, list }) => (
          <div
            className="text-primary shadow-xl border border-[#254F6A66] py-10 px-6 w-[580px] rounded-[20px] space-y-2"
            key={id}
          >
            <img
              src={image}
              alt="maerketplace"
              className="bg-[#254F6A66] p-3 rounded-xl "
            />
            <h4 className="font-semibold text-[1.625rem] text-primary">
              {title}
            </h4>
            <p className="w-[321px] text-xl font-normal text-[#000000B2]">
              {description}
            </p>
            <ul className="list-disc ml-5 text-xl font-normal  pt-4 space-y-2 text-[#000000B2]">
              {Array.isArray(list) &&
                list.map((item, id) => <li key={id}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default SecondBridgeMainSEction
