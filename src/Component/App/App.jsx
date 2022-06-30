import React from "react";
import Contactus from "../Contactus/Contactus";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Production from "../Production/Production";
import Sidenav from "../Sidenav/Sidenav";
import Studio from "../Studio/Studio";
import Home from "../Home/Home";
import { Route, Routes } from "react-router-dom";
export default function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="Studio" element={<Studio />}></Route>
        <Route path="Contactus" element={<Contactus />}></Route>
        <Route path="Production" element={<Production />}></Route>
      </Routes>
      <Sidenav />
      <Footer />
    </>
  );
}
