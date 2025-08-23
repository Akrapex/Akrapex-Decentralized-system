import { Link, NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const NavBar = () => {
  const location = useLocation();

  // pages that has a diffrent navbar colour
  const specialPages = ["/", "/marketplace"];

  // check if current path is one omf them
  const isSpecialPage = specialPages.includes(location.pathname);
  return (
    <nav className=" bg-primary text-white w=full shadow-md flex items-center py-5 fixed top-0 w-full z-10">
      <div className="flex justify-around items-center w-full mx-auto ">
        <h1 className=" font-medium font-inter">Logo</h1>
        <div className=" font-medium font-inter md:flex  gap-12 hidden ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/availablecourses">Features</NavLink>
          <NavLink to="/marketplace">Properties</NavLink>
          <NavLink to="/firstbridge">How it works</NavLink>
        </div>
        <Link to="https://tally.so/r/mVOPVa">
          <button className=" text-white font-medium font-inter bg-[#E5BD3E] py-2 px-5 rounded-[20px] ">
            Join waitlist <IoIosArrowRoundForward className="inline-block h-[inherit] bg-white text-black rounded-full p-1 w-auto"/>
          </button>
        </Link>
      </div>
      {/* <div className="border-b border-[#6D9D8E] py-2"></div> */}
    </nav>
  );
};

export default NavBar;
