import React from 'react'
import { availableCoursesData } from '../Constants/availableCoursesData';

const AvailableCourseMainSection = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto mb-40">
      <div className="flex justify-between items-center">
        <h2 className="text-[4rem] font-bold text-secondary font-Grotesk">
          Available Courses
        </h2>
        <button className="text-xl font-normal py-2 px-6 bg-yellow text-white rounded-[20px]">
          View all Courses
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6 my-10">
        {availableCoursesData.map(
          ({ id, image, title, name, time, modules, book }) => (
            <div key={id}>
              <img src={image} alt={title} />
              <div className="w-[587px] shadow-lg px-10 py-6 space-y-3 rounded-xl">
                <p className="text-[1.625rem] font-medium text-secondary font-Grotesk">
                  {title}
                </p>
                <p className="text-secondary text-base font-light">{name}</p>
                <div className="flex justify-between items-center text-xl font-nor font-inter">
                  <p>{time}</p>
                  <div className="flex items-center gap-3">
                    <img src={book} alt="book" />
                    <p>{modules}</p>
                  </div>
                </div>
                <div className="m-auto text-center">
                  <button className="text-white bg-primary py-2 px-10 w-[525px] rounded-[20px]">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default AvailableCourseMainSection
