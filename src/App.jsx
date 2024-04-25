//
// import Home from "./home/Home";
import Header from "./home/containers/Header";
import Footer from "./home/containers/Footer";
// import ProductDetails from "./productDetails/ProductDetails";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
