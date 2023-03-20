// import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Carrito from "./pages/Carrito";


export default function App() {


  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/carrito" element={<Carrito />} />


      </Routes>



    </>
  )
}