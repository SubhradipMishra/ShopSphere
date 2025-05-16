// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-black via-blue-700 to-black flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center max-w-3xl text-white">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        >
          Unleash the <span className="text-blue-400">Power</span> of Shopping
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-blue-200 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Discover top-notch products at unbeatable prices — all in one place.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/products"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3 rounded-full text-lg transition duration-300 shadow-xl"
          >
            Start Shopping
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
