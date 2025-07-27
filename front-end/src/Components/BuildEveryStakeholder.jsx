import React from 'react'

const BuildEveryStakeholder = () => {
  return (
    <div>
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
      <div className="w-[509px] shadow-xl border border-[#254F6A66] px-10 py-10">
        <h4 className="font-semibold text-[1.625rem] text-primary">
          Quick Onboarding
        </h4>
        <ul className="text-secondary font-inter font-normal space-y-5 pt-5 list-decimal">
          <button>
            <li>Create your developer profile Upload</li>
          </button>
          <li>Upload project portfolio</li>
          <li>Set up Payment and escrows account</li>
          <li>Connect with investors and collaborators</li>
        </ul>
      </div>
    </div>
  );
}

export default BuildEveryStakeholder
