import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";
const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  return (
    <nav
      className="flex flex-col justify-between items-center 
                 py-8 container mx-auto lg:flex-row gap-5 lg:gap-0"
    >
      <NavLink to="/">
        <h2 className="text-2xl font-semibold">FoodRecipe</h2>
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter items..."
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg
                       shadow-red focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
