import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const movies = [
  {
    title: "Oppenheimer",
    poster: "https://image.tmdb.org/t/p/w500/8Gxvnd0ZCft6L2VNvYK34L1WgYr.jpg",
  },
  {
    title: "Jawan",
    poster: "https://image.tmdb.org/t/p/w500/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
  },
  {
    title: "RRR",
    poster: "https://image.tmdb.org/t/p/w500/hcNM0HjfPonIzOVy6LVTDBXSfMq.jpg",
  },
];

const Landing = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden text-black bg-white">
      <Header onLoginClick={() => setShowLogin(true)} />

      {/* Hero Section */}
      <div
        className="flex items-center justify-center px-4 bg-center bg-cover md:px-10"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1524985069026-dd778a71c7b4")`,
          height: "85vh",
        }}
      >
        <motion.div
          className="w-full max-w-2xl p-6 text-center bg-white bg-opacity-90 backdrop-blur-sm md:p-10 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-4 text-3xl font-bold leading-tight text-red-600 sm:text-4xl md:text-5xl">
            Book Tickets in a Flash 🎬
          </h1>
          <p className="mb-6 text-base text-gray-700 sm:text-lg md:text-xl">
            Discover trending movies and book your seats anytime, anywhere with PictureDheko!
          </p>
        </motion.div>
      </div>

      {/* Now Showing */}
      <section className="px-4 py-12 sm:px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:text-4xl">
          🍿 Now Showing
        </h2>

        <div className="flex gap-4 px-4 -mx-4 overflow-x-auto sm:gap-6 scrollbar-hide">
          {movies.map((movie, index) => (
            <motion.div
              key={index}
              className="min-w-[160px] sm:min-w-[200px] bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="rounded-t-lg w-full h-[220px] sm:h-[300px] object-cover"
              />
              <div className="p-3 text-center sm:p-4">
                <h3 className="text-sm font-semibold text-gray-800 sm:text-lg">{movie.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLogin(false)}
            />

            {/* Login Content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              onClick={() => setShowLogin(false)} // ← this allows closing on background click
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div
                className="w-full h-full max-w-md p-6 bg-white shadow-2xl rounded-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Login to PictureDheko</h2>

                {/* Social Login */}
                <div className="flex justify-center gap-4 mb-6">
                  <button className="flex items-center px-4 py-2 text-sm text-black bg-white rounded-md hover:bg-red-600">
                    <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" className="w-5 h-5 mr-2" />
                    Google
                  </button>
                  <button className="flex items-center px-4 py-2 text-sm text-black bg-white rounded-md hover:bg-blue-700">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-5 h-5 mr-2" />
                    Facebook
                  </button>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    
                    if (email && password.length >= 6) {
                      toast.success("Login successful!");
                      setShowLogin(false);
                    } else {
                      toast.error("Please enter valid credentials.");
                    }
                  }}
                >
                  <div>
                    <label className="block mb-1 text-sm text-gray-700">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-gray-700">Password</label>
                    <input
                      name="password"
                      type="password"
                      minLength={6}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                      placeholder="••••••••"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600"
                  >
                    Sign In
                  </button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-500">
                  Don&apos;t have an account?{" "}
                  <span className="text-red-500 cursor-pointer hover:underline">
                    Sign up
                  </span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Landing;
