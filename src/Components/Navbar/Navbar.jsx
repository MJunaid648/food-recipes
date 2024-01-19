import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";
import foodieIcon from "./favicon.png";
const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit, textInputRef } =
    useContext(GlobalContext);
  return (
    <nav
      className="flex flex-col justify-between items-center 
                 py-4 px-6 mb-2 mx-auto lg:flex-row gap-5 lg:gap-0 shadow-md "
    >
      <NavLink to="/" className="flex items-center justify-center ">
        <img src={foodieIcon} alt="" className="w-10" />
        <h2 className="text-2xl text-black font-semibold">Foodie</h2>
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          ref={textInputRef}
          placeholder="Enter items..."
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="bg-black/5 p-3 px-8 rounded-full outline-none lg:w-96 
          shadow-md focus:shadow-[#fe941bc0]"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:border-b-2 hover:border-b-black text-xl font-semibold hover:text-gray-700 duration-100"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/recipes"}
            className="text-black hover:border-b-2 hover:border-b-black text-xl font-semibold hover:text-gray-700 duration-100"
          >
            Recipes
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:border-b-2 hover:border-b-black text-xl font-semibold hover:text-gray-700 duration-100"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
