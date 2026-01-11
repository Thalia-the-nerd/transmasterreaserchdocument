import React from 'react';
import { Beaker, Baby, BookOpen, ChevronRight } from 'lucide-react';

const Lactation = () => {
  const sources = [
    {
      author: "Reisman T., Goldstein Z.",
      year: 2018,
      title: "Case Report: Induced Lactation in a Transgender Woman",
      journal: "Transgender Health",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5779241/"
    }
  ];

  return (
    <div className="animate-page px-6 max-w-5xl mx-auto pb-20">
      {/* Header Section */}
      <header className="mb-12">
        <div className="flex items-center gap-3 text-transBlue mb-4">
          <Beaker size={32} />
          <span className="uppercase tracking-widest font-bold">Biological Sciences</span>
        </div>
        <h1 className="text-5xl font-extrabold mb-6">Induced Lactation</h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          The physiological process of inducing milk production in transgender women via
          pharmacological mimicry of pregnancy and post-partum hormonal shifts.
        </p>
      </header>

      {/* Protocol Section */}
      <section className="glass-card p-8 mb-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <ChevronRight className="text-transPink" /> The Newman-Goldfarb Protocol
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <div>
            <p className="mb-4">
              Induction relies on stimulating the mammary tissue with high levels of
              estrogen and progesterone, followed by a sudden withdrawal and the
              introduction of a galactagogue.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-2"><strong>1. Preparation:</strong> High-dose HRT to mimic the 2nd/3rd trimester.</li>
              <li className="flex gap-2"><strong>2. Induction:</strong> Use of Domperidone to spike Prolactin levels.</li>
              <li className="flex gap-2"><strong>3. Maintenance:</strong> Physical stimulation (pumping) to signal demand.</li>
            </ul>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
            <h4 className="text-sm font-bold uppercase text-slate-500 mb-2">Key Hormone Pathway</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Prolactin</span> <span className="text-transBlue">High</span></div>
              <div className="flex justify-between"><span>Progesterone</span> <span className="text-transPink">Low (at trigger)</span></div>
              <div className="flex justify-between"><span>Estradiol</span> <span className="text-slate-400">Stable</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Comparison Table */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Baby className="text-transBlue" /> Nutritional Viability
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse glass-card overflow-hidden">
            <thead className="bg-white/5">
              <tr>
                <th className="p-4 border-b border-white/10">Nutrient</th>
                <th className="p-4 border-b border-white/10">Trans Woman Milk</th>
                <th className="p-4 border-b border-white/10">Cis Woman Milk</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr>
                <td className="p-4 border-b border-white/5">Protein</td>
                <td className="p-4 border-b border-white/5">~1.1 g/dL</td>
                <td className="p-4 border-b border-white/5">~1.0-1.2 g/dL</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-white/5">Lactose</td>
                <td className="p-4 border-b border-white/5">~6.8 g/dL</td>
                <td className="p-4 border-b border-white/5">~6.7-7.0 g/dL</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-white/5">Fat Content</td>
                <td className="p-4 border-b border-white/5">Highly variable</td>
                <td className="p-4 border-b border-white/5">Variable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sources Footer */}
      <footer className="mt-20 border-t border-white/10 pt-10">
        <h4 className="flex items-center gap-2 text-lg font-bold mb-6 text-slate-400">
          <BookOpen size={20} /> Peer-Reviewed Sources
        </h4>
        <div className="space-y-4">
          {sources.map((s, idx) => (
            <div key={idx} className="text-sm text-slate-500">
              <span className="text-slate-300 font-medium">{s.author} ({s.year}).</span> {s.title}.
              <em className="text-slate-400"> {s.journal}.</em>
              <a href={s.link} target="_blank" className="ml-2 text-transBlue hover:underline underline-offset-4">
                View Paper →
              </a>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Lactation;
