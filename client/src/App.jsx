import "./App.css";
import LandingPage from "./Components/Views/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Views/Home/Home";
import Detail from "./Components/Views/Detail/Detail";
import Form from "./Components/Views/Form/Form";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <h1 className="">IGNITE MOTORS</h1>
      <Navbar />
      <main className="background">
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Form" element={<Form />}></Route>
          <Route exact path="/Detail/:idCar" element={<Detail />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
