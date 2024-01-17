import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Favourites from "./pages/Favourites/Favourites";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import { useContext } from "react";
import { GlobalContext } from "./Context/Context";
function App() {
  const { loading } = useContext(GlobalContext);
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
