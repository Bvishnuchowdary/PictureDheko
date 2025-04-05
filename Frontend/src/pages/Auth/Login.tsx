// src/pages/Auth/Login.tsx
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen p-4 text-white bg-gray-900"
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-black shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center text-red-500">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold bg-red-600 rounded-lg hover:bg-red-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
