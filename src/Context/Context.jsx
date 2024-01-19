import { useNavigate } from "react-router-dom";
const { createContext, useState, useEffect, useRef } = require("react");
export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);
  const [upperLimit, setUpperLimit] = useState(0);
  const [loadMoreBtnDisabled, setLoadMoreBtnDisabled] = useState(false);
  const navigate = useNavigate();
  const textInputRef = useRef(null);
  const handleExloreButtonClick = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setRecipeList(() => []);
  //   setUpperLimit(() => 10);
  //   setLoadMoreBtnDisabled(() => false);
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
  //     );
  //     const data = await response.json();

  //     if (data?.data?.recipes) {
  //       setRecipeList(() => data?.data?.recipes);
  //       setSearchParam("");
  //       setLoading(false);
  //     }
  //   } catch (e) {
  //     console.log(e.message);
  //     setLoading(false);
  //     setSearchParam("");
  //   }
  //   navigate("/recipes");
  // }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoadMoreBtnDisabled(false);
    try {
      setLoading(true);

      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setUpperLimit(10); // Reset upperLimit directly
        setSearchParam("");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error.message);
      setLoading(false);
      setSearchParam("");
    }
    navigate("/recipes");
  }

  function handleAddToFavourite(getCurrentItem) {
    let copyFavouritesList = [...favouritesList];
    let index = copyFavouritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      copyFavouritesList.push(getCurrentItem);
    } else {
      copyFavouritesList.splice(index, 1);
    }
    setFavouritesList(copyFavouritesList);
  }
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavourite,
        favouritesList,
        upperLimit,
        setUpperLimit,
        loadMoreBtnDisabled,
        setLoadMoreBtnDisabled,
        textInputRef,
        handleExloreButtonClick,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
