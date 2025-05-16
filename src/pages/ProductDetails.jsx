import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';  // import cart context
import dummyProducts from '../data/dummyProducts'; // import products data

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = dummyProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-blue-400 bg-black">
        <h2 className="text-3xl">Product not found</h2>
      </div>
    );
  }

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black text-blue-300 p-8 flex flex-col md:flex-row gap-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex-1 flex justify-center">
        <motion.img
          src={product.image}
          alt={product.name}
          className="rounded-xl shadow-xl max-w-full max-h-[400px] object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 150 }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-extrabold">{product.name}</h1>
        <p className="text-2xl font-semibold">₹{product.price.toLocaleString("en-IN")}</p>

        <p className="text-gray-400 leading-relaxed">{product.description}</p>

        <div className="flex items-center space-x-4">
          <button
            onClick={decrement}
            className="bg-blue-500 hover:bg-blue-400 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-2xl select-none"
          >
          
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            onClick={increment}
            className="bg-blue-500 hover:bg-blue-400 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-2xl select-none"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-blue-600 hover:bg-blue-500 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg transition"
        >
          Add to Cart
        </button>

        <button
          onClick={() => navigate('/products')}
          className="mt-6 text-blue-400 underline hover:text-blue-300 self-start"
        >
          ← Back to Products
        </button>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
