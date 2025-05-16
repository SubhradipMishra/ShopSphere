// src/pages/RefundPolicy.jsx
import { motion } from 'framer-motion';

const RefundPolicy = () => (
  <motion.div
    className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-black via-blue-900 to-black text-blue-300 min-h-screen"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>

    <p className="mb-4">
      We want you to be completely satisfied with your purchase. If you are not satisfied, we offer refunds under the following terms:
    </p>

    <h2 className="text-2xl font-semibold mb-3">Eligibility for Refund</h2>
    <ul className="list-disc ml-6 mb-4 space-y-2">
      <li>Refund requests must be made within <strong>30 days</strong> of the purchase date.</li>
      <li>The item must be unused, in the same condition you received it, and in the original packaging.</li>
      <li>Proof of purchase (receipt or order number) is required.</li>
    </ul>

    <h2 className="text-2xl font-semibold mb-3">Non-Refundable Items</h2>
    <p className="mb-4">
      Certain items are not eligible for refunds, including:
    </p>
    <ul className="list-disc ml-6 mb-4 space-y-2">
      <li>Digital products, downloads, or software.</li>
      <li>Gift cards.</li>
      <li>Sale or clearance items (unless defective).</li>
    </ul>

    <h2 className="text-2xl font-semibold mb-3">Refund Process</h2>
    <p className="mb-4">
      To request a refund, please contact our support team at <a href="mailto:shopsphere@example.com" className="underline hover:text-blue-400">support@example.com</a> with your order details.
    </p>
    <p className="mb-4">
      Once your return is received and inspected, we will notify you of the approval or rejection of your refund.
    </p>
    <p className="mb-4">
      If approved, your refund will be processed and a credit will automatically be applied to your original method of payment within 7-10 business days.
    </p>

    <h2 className="text-2xl font-semibold mb-3">Exchanges</h2>
    <p className="mb-4">
      We only replace items if they are defective or damaged. If you need to exchange an item for the same product, please contact support.
    </p>

    <h2 className="text-2xl font-semibold mb-3">Shipping Returns</h2>
    <p className="mb-4">
      You will be responsible for paying your own shipping costs for returning your item. Shipping costs are non-refundable.
    </p>

    <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
    <p>
      If you have any questions about our refund policy, please contact us at <a href="mailto:shopsphere@example.com" className="underline hover:text-blue-400">support@example.com</a>.
    </p>
  </motion.div>
);

export default RefundPolicy;
