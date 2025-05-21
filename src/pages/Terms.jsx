// src/pages/Terms.jsx
import { motion } from 'framer-motion';

const Terms = () => (
  <motion.div
    className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-black via-blue-900 to-black text-blue-300 min-h-screen"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

    <p className="mb-4">
      Welcome to our e-commerce website. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
      Please read them carefully.
    </p>

    <h2 className="text-2xl font-semibold mb-3">1. Use of the Website</h2>
    <p className="mb-4">
      You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the website.
      You must not use the site to transmit harmful or unlawful material.
    </p>

    <h2 className="text-2xl font-semibold mb-3">2. Account Responsibility</h2>
    <p className="mb-4">
      If you create an account, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
      Notify us immediately of any unauthorized use.
    </p>

    <h2 className="text-2xl font-semibold mb-3">3. Product Information</h2>
    <p className="mb-4">
      We strive to provide accurate product descriptions, pricing, and availability. However, errors may occur. We reserve the right to correct any errors or inaccuracies and to change or update information without prior notice.
    </p>

    <h2 className="text-2xl font-semibold mb-3">4. Orders and Payments</h2>
    <p className="mb-4">
      By placing an order, you agree to provide accurate information and authorize payment.
      We reserve the right to refuse or cancel any orders for reasons including product or service availability, errors in pricing, or suspected fraud.
    </p>

    <h2 className="text-2xl font-semibold mb-3">5. Shipping and Delivery</h2>
    <p className="mb-4">
      Shipping times are estimates and not guaranteed. We are not responsible for delays caused by carriers or customs.
      Risk of loss passes to you upon delivery.
    </p>

    <h2 className="text-2xl font-semibold mb-3">6. Returns and Refunds</h2>
    <p className="mb-4">
      Please refer to our <a href="/refund-policy" className="underline hover:text-blue-400">Refund Policy</a> for detailed information on returns and refunds.
    </p>

    <h2 className="text-2xl font-semibold mb-3">7. Intellectual Property</h2>
    <p className="mb-4">
      All content on the website, including text, graphics, logos, and images, is our property or licensed to us and protected by intellectual property laws.
      You may not use or reproduce any content without our express written permission.
    </p>

    <h2 className="text-2xl font-semibold mb-3">8. Limitation of Liability</h2>
    <p className="mb-4">
      To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the website or products.
    </p>

    <h2 className="text-2xl font-semibold mb-3">9. Privacy</h2>
    <p className="mb-4">
      Your use of our website is also governed by our <a href="/privacy-policy" className="underline hover:text-blue-400">Privacy Policy</a>, which explains how we collect and use your information.
    </p>

    <h2 className="text-2xl font-semibold mb-3">10. Changes to Terms</h2>
    <p className="mb-4">
      We reserve the right to update or change these Terms and Conditions at any time without prior notice.
      Your continued use of the website after changes constitutes acceptance of the new terms.
    </p>

    <h2 className="text-2xl font-semibold mb-3">11. Governing Law</h2>
    <p className="mb-4">
      These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where our company is registered.
    </p>

    <h2 className="text-2xl font-semibold mb-3">12. Contact Us</h2>
    <p>
      If you have any questions about these Terms, please contact us at <a href="mailto:shopsphere@example.com" className="underline hover:text-blue-400">shopsphere@gmail.com</a>.
    </p>
  </motion.div>
);

export default Terms;

// https://shop-sphere-b41e.vercel.app/