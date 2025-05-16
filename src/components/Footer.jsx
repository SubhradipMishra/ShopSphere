// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 py-6 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0 px-4">
        <p>&copy; {new Date().getFullYear()} SubhradipMishra. All rights reserved.</p>
        <nav className="flex space-x-6 text-sm">
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/refund-policy" className="hover:underline">
            Refund Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
