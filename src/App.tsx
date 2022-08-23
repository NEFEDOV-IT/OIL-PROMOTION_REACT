import React, { FC } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import Charts from "./pages/Charts/Charts";
import NotFound from "./pages/NotFound/NotFound";
import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/Shop/ShoppingCart/ShoppingCart";

const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<ShoppingCart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
