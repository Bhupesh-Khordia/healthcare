"use client"
import React, { useState } from 'react';
import { Menu, X, Home, Info, Phone, Mail, Github, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Demo auth state

  const menuItems = [
    { name: 'Home', icon: <Home className="w-5 h-5" />, href: '#' },
    { name: 'About', icon: <Info className="w-5 h-5" />, href: '#' },
    { name: 'Contact', icon: <Phone className="w-5 h-5" />, href: '#' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed w-full bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Logo
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="flex items-center space-x-6"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 text-gray-700"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="relative z-10 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span>{item.name}</span>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 h-full w-full bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-purple-600 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  />
                </motion.a>
              ))}

              {/* Login/Register Button */}
              {!isAuthenticated && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(124, 58, 237, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsAuthenticated(true)}
                  className="ml-6 relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative flex items-center space-x-2 px-6 py-2 bg-white rounded-lg leading-none">
                    <LogIn className="w-5 h-5 text-purple-600" />
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-semibold">
                      Login / Register
                    </span>
                  </div>
                </motion.button>
              )}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden flex items-center space-x-4"
            whileTap={{ scale: 0.95 }}
          >
            {/* Mobile Login Button */}
            {!isAuthenticated && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAuthenticated(true)}
                className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg"
              >
                <LogIn className="w-4 h-4" />
                <span className="text-sm font-medium">Login</span>
              </motion.button>
            )}
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="md:hidden overflow-hidden"
          >
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              {menuItems.map((menuItem, index) => (
                <motion.a
                  key={menuItem.name}
                  href={menuItem.href}
                  variants={item}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
                >
                  <motion.span
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {menuItem.icon}
                  </motion.span>
                  <span>{menuItem.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;