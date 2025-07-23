import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className=" bg-primary text-white w=full shadow-md flex items-center py-5 fixed top-0 w-full z-10">
      <div className="flex justify-around items-center w-full mx-auto ">
        <h1 className=" font-medium font-inter">Logo</h1>
        <div className=" font-medium font-inter md:flex  gap-12 hidden ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="#">About</NavLink>
          <NavLink to="#">Properties</NavLink>
          <NavLink to="#">How it works</NavLink>
        </div>
        <Link to="/">
          <button className=" text-white font-medium font-inter bg-[#E5BD3E] py-2 px-10 rounded-[20px] ">
            Join waitlist
          </button>
        </Link>
      </div>
      {/* <div className="border-b border-[#6D9D8E] py-2"></div> */}
    </nav>
  );
};

export default NavBar;
