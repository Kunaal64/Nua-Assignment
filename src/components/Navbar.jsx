import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Store } from "lucide-react";

// Navigation bar with cart indicator
const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
        >
          <Store size={32} />
          <span>Nua</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-indigo-600 font-medium"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="relative text-gray-600 hover:text-indigo-600"
          >
            <ShoppingCart size={28} />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
