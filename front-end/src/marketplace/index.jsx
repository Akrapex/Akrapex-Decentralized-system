import Navbar from "./Navbar";
import PropertyCard from "./PropertyCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Index = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      let data = await axios.get("http://localhost:5050/properties");
      console.log(Array.isArray(data.data))
      setIsLoading(false);
      setProperties(data.data);
      return data.data;
    }
    fetchProperties()
  }, []);

  if (isLoading) {
    return (
      <>
        <p>LOADING PROPETY..</p>
      </>
    );
  }

  return (
    <>
      <div className="bg-[#296B820D] m-0 p-0">
        <div className="w-full bg-white py-1 mb-5">
          <Navbar />
        </div>
        <div className="bg-white ">
          <div className="flex justify-center flex-wrap py-10">
            <div className="py-5 shrink-0 grow-0 w-10/12">
              <h2 className="text-2xl font-semibold ">
                Real Estate Properties for Sale
              </h2>
              <p>{properties.length} results found</p>
            </div>
            {properties.map((property) => {
              return (
                <PropertyCard
                  title={property.title}
                  price={property.price}
                  image={property.assets[0]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
