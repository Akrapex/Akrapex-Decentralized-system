import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Navbar = ({ properties, handleProperties, setIsLoading }) => {
  let [searchTerm, setSearchTerm] = useState("");
  let inputRef = useRef();
  let navigate = useNavigate();
  let location = useLocation();
  let _query = new URLSearchParams(location.search);
  let query = _query.get("search") || "";
  console.log("this is the log :", query);
  let url = import.meta.env.VITE_API_BASE_URL || "http://localhost:5050";

  useEffect(() => {
    inputRef.current.value = query;
  }, [query]);

  let handleSearchInput = () => {
    let term = inputRef.current.value;
    setSearchTerm(term);
    console.log("search term:", term);
  };

  let handleSearch = async () => {
    navigate(`/properties?search=${searchTerm}`);
    setIsLoading(true);
    let { data } = await axios.get(
      `${url}/api/v1/properties/search?q=${searchTerm}`
    );
    setIsLoading(false);
    handleProperties(data);

    console.log(data);
  };

  return (
    <>
      <div className="max-w-ful bg-white justify-evenly border-slate-300 border-solid border-2  lg:px-8 lg:h-[100px] lg:flex rounded-lg m-5 items-center font-semibold text-slate-500">
        {/* search component */}
        <div className="border-solid shrink-0 grow-0 border-slate-500 border-2 h-[50px] w-full lg:w-4/12 rounded-[inherit] inline-flex items-center box-content capitalize">
          <input
            type="text"
            placeholder="Search location, address, country, state"
            className="inline-block h-full box-border px-3 w-10/12 focus:outline-none capitalize rounded-[inherit]"
            ref={inputRef}
            onInput={handleSearchInput}
          />
          <span
            className=" inline-flex items-center justify-center w-2/12 h-full cursor-pointer hover:bg-slate-200 rounded-[inherit]"
            onClick={handleSearch}
          >
            <Search className="" size={20} />
          </span>
        </div>

        {/* parent container for fiter options */}

        <div className="hidden lg:flex shrink-0 grow-0 justify-around w-8/12 border-slate-500 rounded-[inherit] items-center">
          {/* for sale */}

          <div className="border-solid border-[inherit] border-2 h-[50px] w-[100px] rounded-[inherit] inline-flex items-center justify-center box-content px-3 ">
            <button>
              For Sale <ChevronDown className="inline-block" />
            </button>
          </div>

          {/* propety type filter option */}

          <div className="border-solid border-[inherit] border-2 h-[50px] w-[150px] rounded-[inherit] inline-flex justify-center items-center box-content ">
            <button className="text-center">
              Property Type <ChevronDown className="inline-block" />
            </button>
          </div>

          {/* price range */}

          <div className="border-solid capitalize border-slate-500 border-2 h-[50px] w-[100px] rounded-[inherit] inline-flex items-center justify-center box-content">
            <button className="border-solid border-[inherit]">
              Price <ChevronDown className="inline-block" />
            </button>
          </div>

          {/* filter options */}

          <div className="border-solid capitalize border-slate-500 border-2 h-[50px] rounded-[inherit] inline-flex items-center box-content px-5">
            <p>More</p>
            <div className="pl-4">
              <SlidersHorizontal />
            </div>
          </div>

          {/* search button */}

          <div className="border-solid bg-[#107E9D] text-white w-[193px] h-[50px] border-[inherit] border-2 rounded-[20px] inline-flex  items-center box-content px-5 justify-center">
            <button className="text-lg"> Save search </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
