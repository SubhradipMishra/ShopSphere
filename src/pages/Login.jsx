import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just a simple mock login
    if (form.email && form.password) {
      alert(`Logged in as ${form.email}`);
      navigate('/'); // Redirect to home after login
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-yellow-900 to-black text-yellow-300 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-md w-full bg-yellow-900 bg-opacity-20 p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-extrabold mb-8 text-center">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black text-yellow-300 border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black text-yellow-300 border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-full text-lg shadow-lg transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-yellow-400">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="underline hover:text-yellow-300 cursor-pointer"
          >
            Sign up
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
