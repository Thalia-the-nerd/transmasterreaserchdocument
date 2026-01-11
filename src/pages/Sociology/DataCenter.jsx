import React, { useState } from 'react';
import { Database, Filter, ExternalLink, ShieldAlert, CheckCircle, Search } from 'lucide-react';

const DataCenter = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All', 'Validity', 'Transition Outcomes', 'Regret & Detransition',
    'Sports', 'Non-Binary Sex', 'Discrimination', 'Youth', 'Debunking'
  ];

  const studies = [
    {
      category: 'Validity',
      title: "American Psychological Association Resolution",
      org: "APA",
      desc: "Affirms that transgender identities are valid and not a mental disorder.",
      link: "https://www.apa.org/about/policy/resolution-gender-identity.pdf"
    },
    {
      category: 'Transition Outcomes',
      title: "Cornell University Literature Review",
      org: "Cornell",
      desc: "Analysis of 55 studies: 51 showed positive results, 0 showed negative results for transitioning.",
      link: "https://whatweknow.inequality.cornell.edu/topics/lgbt-equality/what-does-the-scholarly-research-say-about-the-well-being-of-transgender-people/"
    },
    {
      category: 'Regret & Detransition',
      title: "50-Year Longitudinal Study on SRS Regret",
      org: "PubMed",
      desc: "Regret rate for bottom surgery found at 2.2%, significantly lower than knee-replacement surgery (20%).",
      link: "https://pubmed.ncbi.nlm.nih.gov/24872188/"
    },
    {
      category: 'Sports',
      title: "Meta-Analysis of Transgender Athletic Performance",
      org: "PMC",
      desc: "Findings show no consistent or direct research indicating trans women have an unfair advantage.",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5357259/"
    },
    {
      category: 'Debunking',
      title: "The ROGD 'Social Contagion' Study",
      org: "PLOS ONE",
      desc: "Critique: Methodology relied on polling parents from transphobic websites; data is scientifically invalid.",
      link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0202330",
      isDebunked: true
    }
  ];

  const filteredStudies = activeFilter === 'All'
    ? studies
    : studies.filter(s => s.category === activeFilter);

  return (
    <div className="animate-page px-6 max-w-7xl mx-auto pb-32">
      {/* Header */}
      <header className="mb-16 pt-10 text-center">
        <div className="flex justify-center items-center gap-3 text-transPink mb-4">
          <Database size={40} />
          <span className="uppercase tracking-[0.3em] font-black text-sm">Empirical Data Hub</span>
        </div>
        <h1 className="text-7xl font-black mb-6 tracking-tighter italic">STUDY MEGADUMP</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          A centralized repository of peer-reviewed research, legal documentation,
          and statistical analysis covering every facet of the transgender experience.
        </p>
      </header>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${activeFilter === cat
                ? 'bg-transBlue border-transBlue text-slate-950'
                : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* The Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudies.map((study, idx) => (
          <div
            key={idx}
            className={`glass-card p-6 flex flex-col justify-between transition-all hover:scale-[1.02] ${study.isDebunked ? 'border-red-500/30 bg-red-500/5' : 'border-white/10'
              }`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded font-bold ${study.isDebunked ? 'bg-red-500 text-white' : 'bg-white/10 text-slate-400'
                  }`}>
                  {study.category}
                </span>
                {study.isDebunked ? <ShieldAlert size={18} className="text-red-500" /> : <CheckCircle size={18} className="text-green-500" />}
              </div>
              <h3 className="text-xl font-bold mb-2 leading-tight text-slate-100">{study.title}</h3>
              <p className="text-xs font-mono text-transBlue mb-3">{study.org}</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{study.desc}</p>
            </div>

            <a
              href={study.link}
              target="_blank"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors border border-white/5"
            >
              Access Study <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataCenter;
