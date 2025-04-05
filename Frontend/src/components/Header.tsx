// src/components/Header.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bell, Gift } from "lucide-react";
import picturedhekoLogo from "@/assets/picturedheko.png";

const Header = ({ onLoginClick }: { onLoginClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="relative z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <h1 className="text-xl font-bold text-red-600 md:text-2xl">
          PictureDheko 🎬
        </h1>
         {/* <img
            src={picturedhekoLogo}
            alt="PictureDheko Logo"
            className="w-20 h-10" // or any Tailwind class you want
        /> */}

        {/* Search Bar - Center */}
        <div className="hidden w-2/3 md:flex">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full px-4 py-2 text-sm text-black bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onLoginClick}
            className="px-4 py-1 text-sm font-medium text-white bg-red-500 rounded-full hover:bg-red-600"
          >
            Signin
          </button>

          {/* Menu toggle button - Always visible */}
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Sidebar Drawer - From right and 1/4 screen width */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 z-40 h-full bg-white shadow-lg w-1/4 min-w-[240px] p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-red-600">Menu</h2>
              <button onClick={toggleMenu}>
                <X size={26} className="text-gray-800" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 text-base text-gray-800">
              <button
                onClick={() => {
                  onLoginClick();
                  toggleMenu();
                }}
                className="text-left hover:text-red-500"
              >
                🔐 Signin
              </button>
              <button className="text-left hover:text-red-500">
                <Bell className="inline-block w-5 h-5 mr-2" />
                Notifications
              </button>
              <button className="text-left hover:text-red-500">
                <Gift className="inline-block w-5 h-5 mr-2" />
                Offers
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
