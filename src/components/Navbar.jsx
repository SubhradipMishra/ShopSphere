import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Make sure you have lucide-react installed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-gradient-to-r from-black via-blue-700 to-black py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-lg"
    >
      <Link to="/" className="text-3xl font-bold text-white tracking-wide">
        ShopSphere
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-white text-lg font-medium">
        <Link to="/products" className="hover:text-blue-400 transition">Products</Link>
        <Link to="/cart" className="hover:text-blue-400 transition">Cart</Link>
        <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden text-white">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 md:hidden"
          >
            <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">
              Products
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">
              Cart
            </Link>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">
              Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
