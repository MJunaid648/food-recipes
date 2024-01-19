import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";

const Details = () => {
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavourite,
    favouritesList,
  } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    async function fetchRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        if (data?.data) {
          setRecipeDetailsData(data?.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipeDetails();
  }, [id]);
  return (
    <div className="container mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
      <div className="h-96 overflow-hidden rounded-xl group ">
        <img
          src={recipeDetailsData?.recipe?.image_url}
          alt="Recipe Details"
          className="w-full h-full object-cover block group-hover:scale-105  duration-300"
        />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-5xl text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavourite(recipeDetailsData?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-bold  tracking-wider mt-3 
                          inline-block shadow-md text-white bg-[#FE941B] hover:shadow-md hover:shadow-[#00000041]"
          >
            {favouritesList &&
            favouritesList.length > 0 &&
            favouritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from Favourites"
              : "Add to Favourites"}
          </button>
        </div>
        <div>
          <span className="text-3xl font-bold text-black ">Ingredients:</span>
          <ul className="flex flex-col gap-2 mt-4 ml-4">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => {
              return (
                <li key={index} className="list-disc">
                  <span className="text-xl  text-black">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="text-xl  text-black">
                    {`  ${ingredient.description}`}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
