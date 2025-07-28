import React from 'react'
import { steps } from '../Constants/stakeHolderData';

const BuildEveryStakeholder = () => {
  return (
    <div className=' flex items-center py-10'>
      <div className="">
        <img src="/Images/marketPlace.svg" alt="" />
        <h4 className="font-semibold text-[1.625rem] text-primary">
          stakeholderspage
        </h4>
        <p>
          Access funding, connect with investors, and manage development
          projects through DAO governance.
        </p>
      </div>
      <div className="bg-white shadow rounded-xl p-6 w-full max-w-md border border-[#254F6A66] mx-auto">
        <h2 className="text-[1.625rem] font-semibold text-primary">
          Quick Onboarding
        </h2>
        <ul className="space-y-3 text-secondary font-inter text-xl font-normal pt-5">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold">
                {index + 1}
              </span>
              <p className="text-slate-700 text-sm">{step}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BuildEveryStakeholder
