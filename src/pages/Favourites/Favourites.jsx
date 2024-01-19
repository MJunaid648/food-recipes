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
      
        <div className="m-6 flex justify-center items-center">
        <p className="mt-14 text-2xl font-semibold text-black tracking-wider">
        Nothing is added in favourites.
        </p>
      </div>
      )}
    </div>
  );
};

export default Favourites;
