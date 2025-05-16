// src/components/ProductCard.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-black text-yellow-300 p-4 rounded-lg shadow-lg flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-yellow-400 font-semibold">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product, 1)} // ✅ Pass quantity
        className="mt-3 bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-full text-black font-semibold transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
