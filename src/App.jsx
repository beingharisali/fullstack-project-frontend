import React from "react";
import Register from "./pages/register";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
