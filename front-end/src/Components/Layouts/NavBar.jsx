import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "/Images/footer-logo-nobg.png";

const NavBar = () => {
  const location = useLocation();


  // pages that has a diffrent navbar colour
  const specialPages = ["/properties"];
  let backgroundcolor = "bg-primary";
  let primaryColor = "text-white";

  // check if current path is one omf them
  const isSpecialPage = specialPages.includes(location.pathname);
  console.log(isSpecialPage);
  console.log(location.pathname);
  if (isSpecialPage) {
    backgroundcolor = "bg-white"
    primaryColor = "text-gray-500"
  }
  
  
  return (
    <nav className={` ${backgroundcolor} ${primaryColor} w=full shadow-md flex items-center   sticky top-0 left-0 w-full z-10`}>
      <div className="flex justify-around items-center w-full mx-auto ">
        <h1 className=" font-medium font-inter text-xl md:text-2xl">
          <img
            src={logo}
            alt="Akrapex logo"
            className="w-[80px] inline-block"
          />
          <span className="md:inline-block mx-3 hidden ">Akrapex</span>
        </h1>
        <div className=" font-medium font-inter md:flex  gap-12 hidden ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/availablecourses">Features</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/firstbridge">How it works</NavLink>
        </div>
        <Link to="/newslater">
          <button className=" text-white font-medium font-inter bg-[#E5BD3E] py-2 px-5 rounded-[20px] ">
           Get started
           </button>
        </Link>
      </div>
      {/* <div className="border-b border-[#6D9D8E] py-2"></div> */}
    </nav>
  );
};

export default NavBar;
