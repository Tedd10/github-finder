import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Search from './pages/Search';
import User from './pages/User';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Search />
            </motion.div>
          }
        />
        <Route
          path="/user/:username"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <User />
            </motion.div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
