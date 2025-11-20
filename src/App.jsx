import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

// Main app component with routing setup
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nua. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
