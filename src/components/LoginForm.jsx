import { useState } from 'react';
import { motion } from 'framer-motion';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <motion.section
      className="h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-semibold text-center text-blue-600 mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg text-blue-900">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 mt-2 bg-gray-100 text-blue-900 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg text-blue-900">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 mt-2 bg-gray-100 text-blue-900 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Log In
          </motion.button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-blue-700">Don't have an account? <span className="text-indigo-600 cursor-pointer">Sign Up</span></p>
        </div>
      </div>
    </motion.section>
  );
};

export default LoginForm;
