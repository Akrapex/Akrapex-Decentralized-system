import Navbar from "./Navbar";
import PropertyCard from "./PropertyCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Index = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [properties, setProperties] = useState([]);

  useEffect(() => {
    
    async function fetchProperties() {
      try {
        let {data} = await axios.get(
          "http://localhost:5050/api/v1/properties/search"
        );
        console.log(data);
        setIsLoading(false);
        setProperties(data);
        return data.data;
      } catch (error) {
        console.log(error);
      }
    }
    fetchProperties()
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="h-96 font-bold text-center flex justify-center items-center">
          <p>fetching properties ...</p>
      </div>
      </>
    );
  }
  console.log(properties.pages)

  return (
    <>
      <div className="bg-[#296B820D] m-0 p-0">
        <div className="w-full bg-white py-1 mb-5">
          <Navbar />
        </div>
        <div className="bg-white px-[30px] mx-auto">
          <div className="flex justify-between flex-wrap py-10">
            <div className="py-5 shrink-0 grow-0 w-10/12">
              <h2 className="text-2xl font-semibold ">
                Real Estate Properties for Sale
              </h2>
              <p>{properties.result} results found</p>
            </div>
            {properties.data.map((property) => {
              return (
                <PropertyCard
                  title={property.title}
                  price={property.price}
                />
              );
            })}
            
          </div>
          {}
        </div>
      </div>
    </>
  );
};

export default Index;
