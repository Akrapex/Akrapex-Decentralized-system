import Navbar from "./Navbar";
import PropertyCard from "./PropertyCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { VscError } from "react-icons/vsc";


const Index = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [properties, setProperties] = useState([]);
  let location = useLocation();
  console.log("location:", location.search);

  let query = new URLSearchParams(location.search);
  console.log("query:", query.get("search"));
  let url = import.meta.env.VITE_API_BASE_URL || "http://localhost:5050";

  useEffect(() => {
    async function fetchProperties() {
      try {
        if (import.meta.env.NODE_ENV !== "production") {
          console.log("⚠️  Development mode: Using local API endpoint.");
          if (location.search !== "") {
            let { data } = await axios.get(
              `${url}/api/v1/properties/search?q=${query.get(
                "search"
              )}`
            );
            console.log(data);
            setIsLoading(false);
            setProperties(data);
            return data.data;
          } else {
            let { data } = await axios.get(
              `${url}/api/v1/properties/search`
            );
            console.log(data);
            setIsLoading(false);
            setProperties(data);
            return data.data;
          }
        } else {
          console.log("🔒 Production mode: Using production API endpoint.");
          if (location.search !== "") {
            let { data } = await axios.get(
              `${url}/api/v1/properties/search?q=${query.get(
                "search"
              )}`
            );
            console.log(data);
            setIsLoading(false);
            setProperties(data);
            return data.data;
          } else {
            let { data } = await axios.get(
              `${url}/api/v1/properties/search`
            );
            console.log(data);
            setIsLoading(false);
            setProperties(data);
            return data.data;
          }
        }
      } catch (error) {
        setIsLoading(false);
        console.log("something wrong happened :", error);
      }
    }
    fetchProperties();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="h-96 font-bold text-center flex flex-col justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-t-gray-400 animate-spin border-gray-200 h-32 w-32"></div>
          <p>Loading...</p>
        </div>
      </>
    );
  }

  if (properties.length < 1) {
    return (
      <>
        <div className="w-full bg-white py-1 mb-5">
          <Navbar
            properties={properties}
            handleProperties={setProperties}
            setIsLoading={setIsLoading}
          />
        </div>
        <div className="h-96 font-bold text-center flex flex-col justify-center items-center">
          <VscError className="w-16 h-16 text-red-600" />
          <p>Something went wrong</p>
        </div>
      </>
    );
  }
  if (properties.result < 1) {
    return (
      <>
        <div className="w-full bg-white py-1 mb-5">
          <Navbar
            properties={properties}
            handleProperties={setProperties}
            setIsLoading={setIsLoading}
          />
        </div>
        <div className="h-96 font-bold text-center flex flex-col justify-center items-center">
          <VscError className="w-16 h-16 text-red-600" />
          <p>No match found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-[#296B820D] m-0 p-0">
        <div className="w-full bg-white py-1 mb-5">
          <Navbar
            properties={properties}
            handleProperties={setProperties}
            setIsLoading={setIsLoading}
          />
        </div>
        <div className="bg-white px-[30px] mx-auto">
          <div className="flex md:justify-around lg:justify-start flex-wrap py-10">
            <div className="py-5 shrink-0 grow-0 w-10/12">
              <h2 className="text-2xl font-semibold ">
                Real Estate Properties for Sale
              </h2>
              <p>{properties.result} results found</p>
            </div>
            {properties.data.map((property) => {
              return (
                <PropertyCard title={property.title} price={property.price} />
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
