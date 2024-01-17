import { useContext } from "react";
import { GlobalContext } from "../../Context/Context";
import RecipeItem from "../../Components/RecipeList/RecipeItem";

const Favourites = () => {
  const { favouritesList } = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item, index) => (
          <RecipeItem key={index} item={item} />
        ))
      ) : (
        <div className="lg:text-4xl text-xl text-center  text-black font-extrabold">
          Nothing is added in favourites.
        </div>
      )}
    </div>
  );
};

export default Favourites;
