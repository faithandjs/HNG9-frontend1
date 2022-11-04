import React from "react";
import "./App.css";
import Index from "./pages";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Contact from "./pages/contact";
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
