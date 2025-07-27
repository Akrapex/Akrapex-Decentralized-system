import React from 'react'
import { enhancingYourExperienceData } from '../Constants/enhancingYourExperienceData'

const EnhancingYourExperience = () => {
  return (
     <div>
            <div className='text-center m-auto'>
              <h2 className="text-[4rem] font-bold text-secondary">
                Enhancing Your Experience
              </h2>
              <p className='text-[2rem] font-normal text-secondary w-[880px] m-auto font-inter'>
                Discover additional tools and features designed to make your real
                estate journey seamless
              </p>
            </div>
            <div className="grid grid-cols-3 gap-20 mb-40 pt-44">
              {enhancingYourExperienceData.map(({ id, title, description }) => (
                <div
                  className="text-primary shadow-xl border border-[#254F6A66] py-8 px-6 w-[394px] rounded-[20px] space-y-2"
                  key={id}
                >
                  <h4 className="font-semibold text-xl text-secondary font-Grotesk">
                    {title}
                  </h4>
                  <p className="w-[350px] text-base font-inter  font-light text-secondary">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
  )
}

export default EnhancingYourExperience
