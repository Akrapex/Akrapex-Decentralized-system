
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
    <div className="p-10  space-y-10">
      {stakeholderData.map((item, index) => (
        <div
          key={index}
          className="bg-[#FBFCFF] border border-[#E0E0E0] shadow-md rounded-xl py-16 px-14 space-y-6"
        >
          {/* Top Section: Info + Quick Onboarding side by side */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 mb-20">
            {/* Left: Image + Details */}
            <div className="flex-1">
              <img
                src={item.image}
                alt={item.title}
                className=" mb-3 ml-10 bg-[#254F6A66] p-3 rounded-[15px]"
              />
              <h3 className="font-semibold text-[1.625rem] text-primary">
                {item.title}
              </h3>
              <p className="w-[571px] text-xl font-normal text-[#00000099] py-4">
                {item.description}
              </p>
              <ul className="list-disc ml-5 mt-3 text-lg font-inter font-normal space-y-1 text-[#000000B2]">
                {item.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Right: Quick Onboarding */}
            <div className="shadow-xl border border-gray-300 rounded-lg pt-20 px-8 w-[430px]">
              <h4 className="text-lg font-semibold text-[#254F6A]">
                Quick Onboarding
              </h4>
              <ul className="mt-4 space-y-3">
                {step.map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3 text-base text-[secondary] font-medium"
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
          <div className="flex items-center gap-3 shadow-xl border border-gray-300 rounded-[20px] p-4">
            {item.chatbox && (
              <img
                src={item.chatbox}
                alt="chat icon"
                className="w-[100px] mt-1"
              />
            )}
            <p className="italic text-xl text-primary">"{item.message}"</p>
          </div>

          {/* CTA Button */}
          <button className="w-[1264px] bg-[#254F6A] hover:bg-[#1e3e52] text-white py-4 rounded-[20px] font-semibold text-sm">
            Get Started as a {item.title.split(" ")[1] || item.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BuildEveryStakeholder;


