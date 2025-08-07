
 import { stakeholderData,  step, } from '../Constants/stakeHolderData';

// const BuildEveryStakeholder = () => {
//   return (
//     <div className=''>
//       <div className="  py-10">
//         {stakeholderData.map(
//           ({ id, image, title, description, list, message }) => (
//             <div key={id} className="">
//               <img src={image} alt={title} />
//               <h4 className="font-semibold text-[1.625rem] text-primary">
//                 {title}
//               </h4>
//               <p className="w-[571px] text-xl font-normal text-[#00000099]">
//                 {description}
//               </p>
//               <div>
//                 <ul className="list-disc ml-5 text-xl font-normal  pt-4 space-y-2 text-[#000000B2]">
//               {Array.isArray(list) &&
//               // <li key={id}>{item}</li>
//                 list.map((item, index) =>  <li key={`${item}-${index}`}>{item}</li>)}
//             </ul>
//                 <p>{message}</p>
//               </div>
//             </div>
//           ))}
//         <div className="bg-white shadow rounded-xl p-6 w-full max-w-md border border-[#254F6A66] mx-auto">
//           <h2 className="text-[1.625rem] font-semibold text-primary">
//             Quick Onboarding
//           </h2>
//           <ul className="space-y-3 text-secondary font-inter text-xl font-normal pt-5">
//             {step.map((step, index) => (
//               <li key={index} className="flex items-start space-x-3">
//                 <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold">
//                   {index + 1}
//                 </span>
//                 <p className="text-slate-700 text-sm">{step}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BuildEveryStakeholder








const BuildEveryStakeholder = () => {
  return (
    <div className="p-6 space-y-10">
      {stakeholderData.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-[#E0E0E0] shadow-md rounded-xl p-6 space-y-6"
        >
          {/* Top Section: Info + Quick Onboarding side by side */}
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Left: Image + Details */}
            <div className="flex-1">
              <img
                src={item.image}
                alt={item.title}
                className="w-10 h-10 mb-3"
              />
              <h3 className="text-[1.5rem] font-semibold text-[#254F6A]">
                {item.title}
              </h3>
              <p className="text-sm text-[#666] w-[571px] mt-1">{item.description}</p>
              <ul className="list-disc ml-5 mt-3 text-sm text-[#444] space-y-1">
                {item.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Right: Quick Onboarding */}
            <div className="bg-[#F9FBFC] border border-[#D0D7DC] rounded-lg p-5 w-full lg:max-w-sm">
              <h4 className="text-lg font-semibold text-[#254F6A]">
                Quick Onboarding
              </h4>
              <ul className="mt-4 space-y-3">
                {step.map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3 text-sm text-[#333]"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-[#254F6A] text-white rounded-full text-xs font-semibold">
                      {i + 1}
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Message Section */}
          <div className="flex items-start gap-3 bg-[#F4F6F8] rounded-lg p-4">
            {item.chatbox && (
              <img
                src={item.chatbox}
                alt="chat icon"
                className="w-5 h-5 mt-1"
              />
            )}
            <p className="italic text-sm text-[#333]">"{item.message}"</p>
          </div>

          {/* CTA Button */}
          <button className="w-[1264px] bg-[#254F6A] hover:bg-[#1e3e52] text-white py-2 rounded-[20px] font-semibold text-sm">
            Get Started as a {item.title.split(" ")[1] || item.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BuildEveryStakeholder;


