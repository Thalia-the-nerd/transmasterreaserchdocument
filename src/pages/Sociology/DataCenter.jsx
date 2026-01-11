import React, { useState } from 'react';
import { Database, Search, ExternalLink, ShieldAlert, CheckCircle, Info, Filter } from 'lucide-react';

// Make sure you have created src/data/studies.json with your masterdoc data
import studiesData from '../../data/studies.json';

const DataCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Dynamic categories based on your Masterdoc headers
  const categories = ['All', ...new Set(studiesData.map(s => s.category))];

  // Logic to filter studies by category AND search keyword
  const filteredStudies = studiesData.filter(study => {
    const matchesFilter = activeFilter === 'All' || study.category === activeFilter;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="animate-page px-6 max-w-7xl mx-auto pb-32">
      {/* Section Header */}
      <header className="mb-16 pt-10 text-center">
        <div className="flex justify-center items-center gap-3 text-transBlue mb-4">
          <Database size={40} />
          <span className="uppercase tracking-[0.4em] font-black text-xs text-slate-500">Master Research Repository</span>
        </div>
        <h1 className="text-7xl font-black mb-6 tracking-tighter italic bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          STUDY MEGADUMP
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Aggregated peer-reviewed research, clinical outcomes, and statistical meta-analyses.
          Use the filters below to navigate specific topics from the Masterdoc.
        </p>
      </header>

      {/* Control Panel: Search & Filters */}
      <div className="glass-card p-6 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between border-white/5">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-3 text-slate-500" size={20} />
          <input
            type="text"
            placeholder="Search keywords, authors, or journals..."
            className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-transBlue focus:ring-1 focus:ring-transBlue transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          <Filter size={18} className="text-slate-500 shrink-0" />
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${activeFilter === cat
                    ? 'bg-transBlue text-slate-950 shadow-[0_0_15px_rgba(91,206,250,0.4)]'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/5'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-black text-transBlue">{studiesData.length}</div>
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Total Studies</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-black text-green-400">
            {studiesData.filter(s => !s.isDebunked).length}
          </div>
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Verified Supporting</div>
        </div>
        <div className="glass-card p-4 text-center border-red-500/20">
          <div className="text-2xl font-black text-red-500">
            {studiesData.filter(s => s.isDebunked).length}
          </div>
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Debunked / Biased</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-black text-transPink">100%</div>
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Scientific Rigor</div>
        </div>
      </div>

      {/* The Research Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudies.map((study, idx) => (
          <div
            key={idx}
            className={`glass-card p-8 flex flex-col justify-between group transition-all hover:-translate-y-2 ${study.isDebunked ? 'border-red-500/40 bg-red-500/5' : 'hover:border-transBlue/30'
              }`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full font-black ${study.isDebunked ? 'bg-red-500 text-white' : 'bg-white/10 text-transBlue'
                  }`}>
                  {study.category}
                </span>
                {study.isDebunked ? (
                  <ShieldAlert size={20} className="text-red-500 animate-pulse" />
                ) : (
                  <CheckCircle size={20} className="text-green-500/50" />
                )}
              </div>

              <h3 className="text-xl font-bold mb-3 leading-tight text-white group-hover:text-transBlue transition-colors">
                {study.title}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono bg-slate-900 px-2 py-1 rounded border border-white/5 text-slate-400">
                  {study.org}
                </span>
                {study.year && <span className="text-xs text-slate-600 font-bold">{study.year}</span>}
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                {study.desc}
              </p>
            </div>

            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all border ${study.isDebunked
                  ? 'border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white'
                  : 'border-white/10 bg-white/5 hover:bg-transBlue hover:text-slate-950 hover:border-transBlue'
                }`}
            >
              Examine Source <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredStudies.length === 0 && (
        <div className="text-center py-20 glass-card">
          <Info className="mx-auto text-slate-600 mb-4" size={48} />
          <h3 className="text-xl font-bold text-slate-500">No studies found matching your criteria.</h3>
          <p className="text-slate-600">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default DataCenter;
