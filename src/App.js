import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Favourites from "./pages/Favourites/Favourites";
import Details from "./pages/Details/Details";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes/Recipes";
function App() {
  return (
    <div> 
      <div className="min-h-screen py-2  bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
