import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div
      className="flex flex-col  w-80 overflow-hidden p-5 bg-white shadow-xl gap-5 
                     rounded-2xl hover:border-[#FE941B] border-2"
    >
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item.image_url} alt="Recipe item" className="block w-full" />
      </div>
      <span className=" self-start text-sm text-black font-medium">
        {item?.publisher}
      </span>
      <h3 className="font-semibold text-2xl truncate text-black">
        {item?.title}
      </h3>
      <Link
        to={`/recipe-item/${item.id}`}
        className=" self-center text-md text-white font-semibold
         rounded-full px-5 py-1 bg-[#FE941B] hover:shadow-md hover:shadow-[#00000041]"
      >
        Recipe Details
      </Link>
    </div>
  );
};

export default RecipeItem;
