import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className=" bg-primary text-white">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto pt-8">
        <h1 className="text-[2rem] font-medium font-inter">Logo</h1>
        <div className="text-2xl font-medium font-inter flex  gap-12">
          <NavLink to="/">Home</NavLink>
          <NavLink to="#">About</NavLink>
          <NavLink to="#">Properties</NavLink>
          <NavLink to="#">How it works</NavLink>
        </div>
        <Link to="#">
          <button className="text-xl text-[#27516C] font-medium font-inter bg-[#E5BD3E] py-2 px-10 rounded-[20px] ">
            Get Started
          </button>
        </Link>
      </div>
      <div className="border-b border-[#6D9D8E] py-2"></div>
    </nav>
  );
};

export default NavBar;
