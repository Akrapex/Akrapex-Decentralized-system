import { Link } from 'react-router-dom';
import { AISuggestion, Bedrooms, features, propertyTypes } from '../Constants/propertyTypes';
import Apartments from './Apartments';
import ListYourProperty from './ListYourProperty';

const VeiwedFeaturedProperties = () => {
  return (
    <section>
      <div className="max-w-[1140px] w-full mx-auto mt-14">
        <h2 className="text-5xl text-primary font-bold">Featured Properties</h2>
        <div className="flex justify-between items-center">
          <p className="text-[1.625rem] font-normal text-primary">
            Handpicked properties that match current market trends
          </p>
          <Link to="/communityhub">
            <button className="text-xl text-white font-medium font-inter bg-yellow py-3 px-8 rounded-[20px] my-10">
              View all properties
            </button>
          </Link>
        </div>
        <div className="flex gap-10">
          <div className="shadow-lg w-[411px] h-[1387px] px-10 mb-20">
            <p className="text-2xl font-medium font-Grotesk text-secondary py-10">
              Filter
            </p>
            <div className="flex gap-10 items-center">
              <div>
                <p className="text-xl font-normal text-secondary pb-5">Max</p>
                <div className="border border-gray-300 w-[136px] h-[71px] rounded-[12px]"></div>
              </div>
              <div>
                <p className="text-xl font-normal text-secondary pb-5">Min</p>
                <div className="border border-gray-300 w-[136px] h-[71px] rounded-[12px]"></div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-Grotesk text-secondary font-medium pt-8">
                Property type
              </h4>
              {/* These 3 mapping bellow are map inside property types */}
              <div className="flex items-start space-x-2 pt-2">
                {/* Checkboxes container */}
                <div className=" space-y-4 pl-1">
                  {/* Mapped checkboxes */}
                  {propertyTypes.map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <h4 className="text-2xl font-Grotesk text-secondary font-medium pt-10">
                Bedrooms
              </h4>
              <div className="flex gap-5 items-center">
                {Bedrooms.map((rooms) => (
                  <p className="text-secondary text-2xl font-medium border border-gray-200 w-[80px] h-[71px] text-center py-4 rounded-[12px] mt-4">
                    {rooms}
                  </p>
                ))}
              </div>
              <div>
                <h4 className="text-2xl font-Grotesk text-secondary font-medium pt-10">
                  Features
                </h4>
                <div className="space-y-4 pt-3">
                  {/* Mapped features */}
                  {features.map((type) => (
                    <label
                      key={type}
                      className="flex items-center space-x-2 relative z-10"
                    >
                      <input type="checkbox" className="form-checkbox" />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-3 mr-20">
                <h4 className="text-2xl font-Grotesk text-secondary font-medium pt-10">
                  AI Suggestion
                </h4>
                {AISuggestion.map((Suggestion) => (
                  <p className="text-xl font-medium bg-[#D5E6FF33] text-primary w-[361px] py-4 px-8 rounded-[12px] mt">
                    {Suggestion}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Apartments />
        </div>
      </div>
      <ListYourProperty />
    </section>
  );
}

export default VeiwedFeaturedProperties
