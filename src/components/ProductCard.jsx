import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-gradient-to-br from-black via-blue-800 to-black text-blue-300 p-4 rounded-lg shadow-lg flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-blue-400 font-semibold">₹{product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product, 1)}
        className="mt-3 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full text-white font-semibold transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
