import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import the pages we've built
import Lactation from './pages/Biology/Lactation';
import DataCenter from './pages/Sociology/DataCenter';
import Politics from './pages/Legal/Politics';
import Neurobiology from './pages/Biology/Neurobiology';

// Simple Home Component
const Home = () => (
  <div className="p-10 animate-page">
    <h1 className="text-7xl font-black bg-gradient-to-r from-transBlue via-white to-transPink bg-clip-text text-transparent mb-6">
      THE RESEARCH ATLAS
    </h1>
    <div className="glass-card p-8 max-w-2xl">
      <p className="text-xl text-slate-400 leading-relaxed">
        A science-first master document outlining the mutability of sex,
        the reality of gender, and the data behind the transgender experience.
      </p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white selection:bg-transPink selection:text-slate-950">

        {/* Navigation */}
        <nav className="border-b border-white/10 p-6 flex justify-between items-center backdrop-blur-xl sticky top-0 z-50">
          <div className="font-black text-2xl tracking-tighter">
            TRANS<span className="text-transBlue">MASTER</span>
          </div>
          <div className="space-x-8 text-sm font-bold uppercase tracking-widest">
            <Link to="/" className="hover:text-transBlue transition">Home</Link>
            <Link to="/biology/lactation" className="hover:text-transBlue transition">Lactation</Link>
            <Link to="/biology/neuro" className="hover:text-transBlue transition">Neurobiology</Link>
            <Link to="/sociology/data" className="hover:text-transBlue transition">MegaDump</Link>
            <Link to="/legal/politics" className="hover:text-transPink transition">Politics</Link>
          </div>
        </nav>

        {/* Page Routing */}
        <main className="py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biology/lactation" element={<Lactation />} />
            <Route path="/biology/neuro" element={<Neurobiology />} />
            <Route path="/sociology/data" element={<DataCenter />} />
            <Route path="/legal/politics" element={<Politics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
