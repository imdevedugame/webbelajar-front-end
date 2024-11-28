import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./routes/Root";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
