import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Placeholder components - we will build these next
const Home = () => (
  <div className="p-10">
    <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent">
      The Trans Research Atlas
    </h1>
    <p className="mt-4 text-xl text-gray-400">Scientific data, historical context, and empirical evidence.</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white font-sans">
        {/* Top Navigation Bar */}
        <nav className="border-b border-white/10 p-4 flex justify-between backdrop-blur-md sticky top-0 z-50">
          <div className="font-bold text-xl">TRA <span className="text-blue-400">v1.0</span></div>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/biology" className="hover:text-blue-400 transition">Biology</Link>
            <Link to="/history" className="hover:text-blue-400 transition">History</Link>
            <Link to="/sociology" className="hover:text-blue-400 transition">Data</Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* We will add more routes here as we build the pages */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
