import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div className=" max-w-7xl mx-auto px-4 lg:px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
