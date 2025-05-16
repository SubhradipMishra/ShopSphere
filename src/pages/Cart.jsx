import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-blue-300 p-6">
        <h2 className="text-3xl mb-4">Your cart is empty.</h2>
        <button
          onClick={() => navigate("/products")}
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full text-black font-bold"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black text-blue-300 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-4xl font-extrabold mb-8">Your Cart</h1>
      <div className="max-w-5xl mx-auto">
        {cartItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex items-center justify-between mb-6 bg-black bg-opacity-50 rounded-xl p-4 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1 px-6">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-blue-400 font-bold">₹{item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-blue-500 hover:bg-blue-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold select-none"
              >
                −
              </button>
              <span className="w-6 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-blue-500 hover:bg-blue-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold select-none"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 font-bold text-lg"
              title="Remove item"
            >
              &times;
            </button>
          </motion.div>
        ))}

        <div className="mt-12 text-right text-3xl font-bold">
          Total: ₹{totalPrice.toFixed(2)}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => navigate("/checkout")}
            className="bg-blue-600 hover:bg-blue-500 text-black px-8 py-3 rounded-full font-bold shadow-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
