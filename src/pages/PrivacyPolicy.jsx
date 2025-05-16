// src/pages/PrivacyPolicy.jsx
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black text-blue-300 p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-extrabold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
      </p>

      <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li><strong>Personal Data:</strong> Name, email address, shipping address, payment details.</li>
        <li><strong>Usage Data:</strong> Information about how you use our website, pages visited, and products viewed.</li>
        <li><strong>Cookies:</strong> We use cookies to improve your experience and analyze website traffic.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>To process and fulfill your orders.</li>
        <li>To communicate with you about your orders and promotions.</li>
        <li>To improve our website and services.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Data Sharing and Disclosure</h2>
      <p className="mb-4">
        We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website and fulfilling orders.
      </p>

      <h2 className="text-2xl font-bold mb-2">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights.
      </p>

      <h2 className="text-2xl font-bold mb-2">Security</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your information but cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-bold mb-2">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@example.com" className="underline hover:text-blue-400">support@example.com</a>.
      </p>
    </motion.div>
  );
};

export default PrivacyPolicy;
