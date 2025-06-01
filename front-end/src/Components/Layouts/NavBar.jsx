import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[2rem] font-medium font-inter">Logo</h1>
      <div className="text-2xl font-medium font-inter flex  gap-12">
        <NavLink to="/">Home</NavLink>
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Properties</NavLink>
        <NavLink to="#">How it works</NavLink>
      </div>
      <Link to="#">
        <button className="text-xl text-white font-medium font-inter bg-tertiary py-2 px-10 rounded-[20px] ">
          Connent Wallet
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
