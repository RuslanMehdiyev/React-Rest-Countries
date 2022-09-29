import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./Pages/Details";
import Home from "./Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
