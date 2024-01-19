import { useContext, useState } from "react";
import bg from "./home-bg.png";
import { GlobalContext } from "../Context/Context";

const Home = () => {
  const { handleExloreButtonClick } = useContext(GlobalContext);
  return (
    <div className="  px-6 flex flex-col md:flex-row pt-10 gap-4">
      <div className=" flex-1 flex flex-col gap-6 justify-center items-start  ">
        <h1 className="text-5xl text-black font-bold">
          Discover Simple, Delicious and
          <span className="text-[#FE941B]"> Fast Recipes</span>
        </h1>
        <p className="text-2xl  text-black">
          A Recipe is Soulless. The essense of Recipe must Come from You, The
          Cook.
        </p>
        <button
          onClick={() => handleExloreButtonClick()}
          className="self-center md:self-start text-2xl text-white font-semibold bg-black 
          rounded-full px-8 py-2 hover:bg-[#FE941B]
        "
        >
          Explore
        </button>
      </div>
      <div
        className=" flex-1 bg-[#FE941B] rounded-bl-[200px] rounded-tl-[300px] rounded-br-[300px]
        flex  justify-center overflow-hidden pr-5"
      >
        <img src={bg} alt="" className="object-contain block" />
      </div>
    </div>
  );
};

export default Home;
