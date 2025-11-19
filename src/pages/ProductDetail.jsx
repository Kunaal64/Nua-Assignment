import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
      // Optional: Show a toast notification
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error)
    return <div className="text-center py-12 text-red-500">{error}</div>;
  if (!product)
    return <div className="text-center py-12">Product not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Products
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="flex items-center justify-center bg-white p-4">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 max-w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-sm text-indigo-600 font-semibold uppercase tracking-wide mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex items-center text-yellow-400 mr-2">
                <Star fill="currentColor" size={20} />
                <span className="ml-1 font-medium text-gray-700">
                  {product.rating?.rate}
                </span>
              </div>
              <span className="text-gray-400">
                ({product.rating?.count} reviews)
              </span>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="text-4xl font-bold text-gray-900 mb-8">
              ${product.price.toFixed(2)}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center border-t border-gray-100 pt-8">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 font-medium text-gray-900 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(5, quantity + 1))}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
