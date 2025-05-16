// src/pages/Products.jsx
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import dummyProducts from "../data/dummyProducts"; // import shared dummyProducts

// Animation variants for staggered fade-in
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Products = () => {
  return (
    <motion.div
      className="min-h-screen p-8 bg-gradient-to-br from-black via-blue-900 to-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {dummyProducts.map((product) => (
        <motion.div key={product.id} variants={itemVariants}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Products;
