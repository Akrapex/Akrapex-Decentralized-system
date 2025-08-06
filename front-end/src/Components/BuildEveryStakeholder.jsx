
import { stakeholderData,  step, } from '../Constants/stakeHolderData';

const BuildEveryStakeholder = () => {
  return (
    <div className=" flex items-center py-10">
      {stakeholderData.map((id, image, title, description, list, message) => (
        <div key={id} className="">
          <img src={image} alt={title} />
          <h4 className="font-semibold text-[1.625rem] text-primary">
            {title}
          </h4>
          <p className="w-[571px] text-xl font-normal text-[#00000099]">
            {description}
          </p>
          <div>
            <ul className="list-disc ml-5 text-xl font-normal  pt-4 space-y-2 text-[#000000B2]">
              {Array.isArray(list) &&
              // <li key={id}>{item}</li>
                list.map((item, index) =>  <li key={`${item}-${index}`}>{item}</li>)}
            </ul>
            <p>{message}</p>
          </div>
        </div>
      ))}
      <div className="bg-white shadow rounded-xl p-6 w-full max-w-md border border-[#254F6A66] mx-auto">
        <h2 className="text-[1.625rem] font-semibold text-primary">
          Quick Onboarding
        </h2>
        <ul className="space-y-3 text-secondary font-inter text-xl font-normal pt-5">
          {step.map((step, index) => (
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
