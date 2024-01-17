import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div
      className="flex flex-col  w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 
                      border-2 rounded-2xl border-white"
    >
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item.image_url} alt="Recipe item" className="block w-full" />
      </div>
      <span className="text-sm text-cyan-700 font-medium">
        {item?.publisher}
      </span>
      <h3 className="font-bold text-2xl truncate text-black">{item?.title}</h3>
      <Link
        to={`/recipe-item/${item.id}`}
        className="text-sm p-3 px-8 mt-5 rounded-lg uppercase text-white font-medium tracking-wide 
                    inline shadow-md bg-black"
      >
        Recipe Details
      </Link>
    </div>
  );
};

export default RecipeItem;
