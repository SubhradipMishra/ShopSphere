// src/pages/Checkout.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Calculate total price in paise for Razorpay (₹ to paise)
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const amountInPaise = Math.round(totalPrice * 100);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (document.getElementById('razorpay-script')) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.id = 'razorpay-script';
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
      amount: amountInPaise,
      currency: 'INR',
      name: 'Your E-commerce',
      description: `Order by ${form.name}`,
      prefill: {
        name: form.name,
        email: form.email,
      },
      theme: {
        color: '#FFD700',
      },
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        clearCart();
      },
      modal: {
        ondismiss: function () {
          alert('Payment cancelled');
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    handlePayment();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-yellow-400">
        <h2 className="text-3xl">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black text-yellow-300 p-8 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-extrabold mb-8">Checkout</h1>

      {/* Cart Summary */}
      <div className="mb-8 bg-yellow-900 bg-opacity-20 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <ul className="divide-y divide-yellow-700">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold text-xl mt-4 border-t border-yellow-700 pt-4">
          <span>Total</span>
          <span>₹{totalPrice.toLocaleString("en-IN")}</span>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handlePlaceOrder} className="space-y-6 bg-yellow-900 bg-opacity-20 p-6 rounded-lg">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Full Name</label>
          <input
            required
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-black text-yellow-300 border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            type="text"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            required
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-black text-yellow-300 border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            type="email"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="address">Address</label>
          <textarea
            required
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 rounded bg-black text-yellow-300 border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            rows={3}
            placeholder="123 Main St, City, Country"
          />
        </div>

        <h3 className="text-2xl font-semibold mt-6 mb-4">Payment Details</h3>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="cardNumber">Card Number</label>
          <input
            required
            id="cardNumber"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            className="w-full p-2 rounded bg-black text-yellow-300 border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            type="text"
            placeholder="1234 5678 9012 3456"
            maxLength={19}
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1 font-semibold" htmlFor="expiry">Expiry</label>
            <input
              required
              id="expiry"
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
              className="w-full p-2 rounded bg-black text-yellow-300 border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="text"
              placeholder="MM/YY"
              maxLength={5}
            />
          </div>

          <div className="flex-1">
            <label className="block mb-1 font-semibold" htmlFor="cvv">CVV</label>
            <input
              required
              id="cvv"
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              className="w-full p-2 rounded bg-black text-yellow-300 border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="password"
              placeholder="123"
              maxLength={3}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-full text-lg shadow-lg transition"
        >
          Pay ₹{totalPrice.toLocaleString("en-IN")}
        </button>
      </form>
    </motion.div>
  );
};

export default Checkout;
