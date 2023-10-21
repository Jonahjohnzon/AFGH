import Navbar from "./components/navbar";
import Home from "./components/home/home";
import Slidemenu from "./components/Slidemenu";
import Slide from "./components/Slide";
import About from "./components/about/about";
import { HashRouter, Routes, Route } from "react-router-dom";
import Afrogames from "./components/afrogames/afrogames";
import Contact from "./components/contact/contact";
import Admin from "./components/admin/admin";
import { Login } from "./components/login/login";

/*
Head function 
Code holds head of every components
*/
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Slidemenu />
      <Slide />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/afrogames" element={<Afrogames />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminuser" element={<Admin />} />
        <Route path="/loginad" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
