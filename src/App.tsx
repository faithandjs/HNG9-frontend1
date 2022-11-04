import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "./pages";
import Footer from "./components/footer";
import Contact from "./pages/contact";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Index />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
