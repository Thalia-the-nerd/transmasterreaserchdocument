import React from 'react';
import { Brain, Search, Info, ExternalLink } from 'lucide-react';

const Neurobiology = () => {
  const studies = [
    { id: 1, title: "White matter microstructure in trans individuals", journal: "Journal of Neuroscience", link: "https://pubmed.ncbi.nlm.nih.gov/21467211/" },
    { id: 2, title: "Regional gray matter variation in male-to-female transsexualism", journal: "Cerebral Cortex", link: "https://pubmed.ncbi.nlm.nih.gov/19359513/" },
    // You will map the other 20+ studies from your doc here
  ];

  return (
    <div className="animate-page px-6 max-w-6xl mx-auto pb-20">
      <header className="mb-12">
        <div className="flex items-center gap-3 text-transBlue mb-4">
          <Brain size={32} />
          <span className="uppercase tracking-widest font-bold">Neuroscience</span>
        </div>
        <h1 className="text-5xl font-black mb-6">Brain Sex & Structure</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Scientific evidence indicates that transgender individuals often possess brain matter
          structures that align more closely with their gender identity than their sex assigned at birth.
        </p>
      </header>

      {/* Mosaic Brain Concept Visual */}
      <section className="glass-card p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">The Sexual Dimorphism Myth</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-slate-300 space-y-4">
            <p>
              When total brain size is accounted for, sex accounts for <strong>less than 2%</strong> of the
              variance in human brain structure.
            </p>
            <div className="p-4 bg-blue-500/10 border-l-4 border-blue-400 rounded">
              <p className="text-sm italic">
                "Mosaic brains reside in a multi-dimensional space that cannot meaningfully be reduced
                to a male-female continuum." — Neuroscience & Biobehavioral Reviews (2021)
              </p>
            </div>
          </div>

          {/* Interactive Graph Placeholder */}
          <div className="bg-slate-900 rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center">

            <p className="text-xs text-slate-500 mt-4 text-center">Overlapping distributions of male/female brain traits.</p>
          </div>
        </div>
      </section>

      {/* The Research Library (The Megadump) */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Research Library</h2>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
            <input
              type="text"
              placeholder="Search studies..."
              className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-transBlue w-64"
            />
          </div>
        </div>

        <div className="grid gap-4">
          {studies.map((study) => (
            <div key={study.id} className="glass-card p-5 flex items-center justify-between group hover:bg-white/10 transition-all">
              <div>
                <h4 className="font-semibold text-slate-200">{study.title}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{study.journal}</p>
              </div>
              <a href={study.link} target="_blank" className="p-2 bg-white/5 rounded-full text-transBlue hover:bg-transBlue hover:text-slate-950 transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Neurobiology;
