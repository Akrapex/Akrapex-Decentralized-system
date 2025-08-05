import React from 'react'
import { Link } from 'react-router-dom';

const ReadyMasterRealEstate = () => {
  return (
    <section>
      <div className=" py-20 bg-[#296B82]">
        <div className=" max-w-[1440px] w-full mx-auto h-[433px] relative mt-10">
          <div
            style={{
              position: "absolute",
              top: "23%",
              transform: "translateY(-50%)",
              right: "-14rem",
              zIndex: 0,
            }}
          >
            <img
              src="/Images/bg.invest.svg"
              alt="bg-invest"
              className="w-[450px]"
            />
          </div>
          <div className="text-center m-auto space-y-4">
            <h3 className="text-[4rem] font-bold font-Grotesk text-white ">
              Ready to List Your Property?
            </h3>
            <p className="text-[1.625rem] font-inter text-white w-[909px] text-center m-auto py-5">
              Join thousands of successful investors and professionals who have
              transformed their careers through our comprehensive learning
              platform.
            </p>
            <Link to="/serviceprofessional">
              <button
                type="submit"
                className="px-24 py-4 text-xl font-medium text-white bg-yellow focus:outline-none rounded-[20px] "
              >
                Start Your Learning Journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadyMasterRealEstate
