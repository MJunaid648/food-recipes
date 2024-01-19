import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/Context";
import RecipeItem from "../../Components/RecipeList/RecipeItem";
const Recipes = () => {
  const {
    loading,
    recipeList,
    upperLimit,
    setUpperLimit,
    loadMoreBtnDisabled,
    setLoadMoreBtnDisabled,
  } = useContext(GlobalContext);
  const [currentItems, setCurrentItems] = useState([]);

  function loadMoreHandler() {
    if (recipeList.length - upperLimit > 10) {
      setUpperLimit((prevLimit) => prevLimit + 10);
    } else {
      setUpperLimit(() => recipeList.length);
      setLoadMoreBtnDisabled(() => true);
    }
  }
  useEffect(() => {
    console.log("upperLimit:", upperLimit);
    if (recipeList.length - upperLimit < 10) {
      setUpperLimit(() => recipeList.length);
      setLoadMoreBtnDisabled(true);
    }
    setCurrentItems(recipeList.slice(0, upperLimit));
  }, [recipeList, upperLimit]);

  if (loading) {
    return (
      <div className="m-6 flex justify-center items-center">
        <p className="mt-14 text-2xl font-semibold text-black tracking-wider">
          Loading ... Please wait
        </p>
      </div>
    );
  }
  return (
    <div className="py-8 px-6 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-8">
        {currentItems && currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <RecipeItem key={index} item={item} />
          ))
        ) : (
          <div className="lg:text-4xl text-xl text-center  text-black font-extrabold">
            Nothing to show. Please search something.
          </div>
        )}
      </div>
      {loadMoreBtnDisabled ? null : (
        <button
          onClick={() => loadMoreHandler()}
          className=" text-xl text-gray font-semibold
                     bg-white border-2 border-[#716f6f99] hover:border-black hover:text-black rounded-md px-8 py-2 self-stretch"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Recipes;
