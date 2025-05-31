import "./App.css";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import PigFood from "./components/Categories/PigFood";
import CowFood from "./components/Categories/CowFoode";
import FishFoode from "./components/Categories/FishFoode";
import Footer from "./components/Footer/Footer";
import { About } from "./components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
  };

  const Home = () => (
    <>
      <Banner onSearch={handleSearch} />
      <PigFood />
      <CowFood />
      <FishFoode />
    </>
  );

  return (
    <BrowserRouter>
      <div className="font-khmer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
