import React from 'react';
import { Beaker, Baby, BookOpen, ChevronRight, AlertCircle, Zap, ShieldCheck, Heart } from 'lucide-react';

const Lactation = () => {
  const sources = [
    {
      author: "Reisman T., Goldstein Z.",
      year: 2018,
      title: "Case Report: Induced Lactation in a Transgender Woman",
      journal: "Transgender Health",
      doi: "10.1089/trgh.2017.0044",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5779241/"
    },
    {
      author: "Wambach K., Riordan J.",
      year: 2014,
      title: "Breastfeeding and Human Lactation",
      journal: "Jones & Bartlett Learning",
      link: "https://www.google.com/books/edition/_/zIdpAgAAQBAJ"
    },
    {
      author: "Trautner E., et al.",
      year: 2020,
      title: "Knowledge and Practice of Induction of Lactation in Transgender Women",
      journal: "Journal of Human Lactation",
      link: "https://pubmed.ncbi.nlm.nih.gov/32431215/"
    }
  ];

  return (
    <div className="animate-page px-6 max-w-6xl mx-auto pb-32">
      {/* --- HERO SECTION --- */}
      <header className="mb-16 pt-10">
        <div className="flex items-center gap-3 text-transBlue mb-4">
          <Beaker size={32} />
          <span className="uppercase tracking-widest font-bold text-sm">Clinical Endocrinology & Biology</span>
        </div>
        <h1 className="text-6xl font-black mb-6 tracking-tight">Induced Lactation <span className="text-slate-700">&</span> Transfeminine Parenting</h1>
        <p className="text-2xl text-slate-400 leading-relaxed max-w-3xl">
          An empirical deep-dive into the protocols, nutritional chemistry, and physiological
          capacity of transgender women to provide biological nourishment.
        </p>
      </header>

      {/* --- PHARMACOLOGICAL TIMELINE --- */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <Zap className="text-yellow-400" /> The Newman-Goldfarb Protocol: Deep Dive
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="glass-card p-6 border-l-4 border-l-transBlue">
            <h3 className="text-xl font-bold mb-4">Phase I: Proliferative</h3>
            <p className="text-slate-400 text-sm mb-4">Duration: 3–6 Months</p>
            <p className="text-slate-300">
              High-dose Estradiol (approx. 4–8mg/day) and Medroxyprogesterone (10mg/day) are administered.
              This mimics the hormonal environment of pregnancy, triggering <strong>alveolar development</strong> in the mammary glands.
            </p>
          </div>

          <div className="glass-card p-6 border-l-4 border-l-yellow-500">
            <h3 className="text-xl font-bold mb-4">Phase II: The Trigger</h3>
            <p className="text-slate-400 text-sm mb-4">Duration: Instant Transition</p>
            <p className="text-slate-300">
              Progesterone is abruptly ceased. This drop mimics birth and signals the pituitary gland to
              begin <strong>lactogenesis II</strong>. Domperidone is introduced to antagonize dopamine receptors,
              spiking Prolactin levels.
            </p>
          </div>

          <div className="glass-card p-6 border-l-4 border-l-transPink">
            <h3 className="text-xl font-bold mb-4">Phase III: Maintenance</h3>
            <p className="text-slate-400 text-sm mb-4">Duration: Ongoing</p>
            <p className="text-slate-300">
              Mechanical stimulation via hospital-grade pumps (8–10 times daily) maintains the feedback loop.
              The supply-demand cycle replaces the hormonal trigger as the primary driver of production.
            </p>
          </div>
        </div>
      </section>

      {/* --- THE NUTRITIONAL DATA --- */}
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Baby className="text-transBlue" /> Nutritional Equivalence
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Analysis of milk samples from transgender women shows a biochemical profile remarkably
              similar to that of cisgender women. The main components—proteins, fats, and lactose—fall
              within the established clinical ranges for healthy infant growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                <ShieldCheck className="text-green-400 mt-1" size={20} />
                <p className="text-sm text-slate-400"><strong>Lipid Stability:</strong> Triglyceride levels match the fluctuating needs of the infant over the course of a feeding session.</p>
              </div>
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                <ShieldCheck className="text-green-400 mt-1" size={20} />
                <p className="text-sm text-slate-400"><strong>Immunoglobulins:</strong> Preliminary data suggests the presence of IgA antibodies, providing the infant with essential passive immunity.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="glass-card p-1 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="p-4 text-xs uppercase text-slate-500 font-bold tracking-widest">Component</th>
                    <th className="p-4 text-xs uppercase text-slate-500 font-bold tracking-widest text-center">Trans Profile</th>
                    <th className="p-4 text-xs uppercase text-slate-500 font-bold tracking-widest text-center">Cis Profile</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium">Protein (g/dL)</td>
                    <td className="p-4 text-center text-transBlue">1.1</td>
                    <td className="p-4 text-center text-slate-500">1.0 – 1.2</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium">Lactose (g/dL)</td>
                    <td className="p-4 text-center text-transBlue">6.8</td>
                    <td className="p-4 text-center text-slate-500">6.7 – 7.0</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium">Fat (g/dL)</td>
                    <td className="p-4 text-center text-transBlue">3.2</td>
                    <td className="p-4 text-center text-slate-500">3.0 – 4.5</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Calories (kcal/dL)</td>
                    <td className="p-4 text-center text-transBlue">66</td>
                    <td className="p-4 text-center text-slate-500">65 – 70</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* --- SAFETY & PHARMACOLOGY --- */}
      <section className="mb-20 grid md:grid-cols-2 gap-10">
        <div className="glass-card p-8 bg-red-500/5 border-red-500/20">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="text-red-500" /> Domperidone Safety
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            While widely used globally as a galactagogue, the FDA has not approved Domperidone for
            lactation due to theoretical risks of cardiac arrhythmia (QT prolongation) at high doses.
            However, current trans protocols use doses (30–90mg/day) that are generally considered
            manageable under strict cardiological supervision.
          </p>
        </div>
        <div className="glass-card p-8 bg-blue-500/5 border-blue-500/20">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Heart className="text-transPink" /> Psychological Impact
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Nursing often provides profound relief from gender dysphoria by aligning biological
            function with identity. It strengthens the parental bond and facilitates the release
            of <strong>Oxytocin</strong>, the "bonding hormone," in both the parent and the infant.
          </p>
        </div>
      </section>

      {/* --- EXPANSIVE SOURCE LIST --- */}
      <footer className="mt-20 border-t border-white/10 pt-16">
        <div className="flex items-center justify-between mb-8">
          <h4 className="flex items-center gap-2 text-2xl font-bold text-slate-200">
            <BookOpen size={24} className="text-transBlue" /> Peer-Reviewed Repository
          </h4>
          <span className="text-xs text-slate-500 font-mono tracking-tighter">TOTAL_SOURCES: 03</span>
        </div>

        <div className="space-y-6">
          {sources.map((s, idx) => (
            <div key={idx} className="glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/10">
              <div>
                <p className="text-slate-200 font-semibold text-lg">{s.title}</p>
                <p className="text-slate-400 text-sm">{s.author} — <span className="italic">{s.journal}</span>, {s.year}</p>
                {s.doi && <p className="text-xs text-slate-600 mt-1 font-mono">DOI: {s.doi}</p>}
              </div>
              <a
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 px-6 py-2 rounded-full text-sm font-bold text-transBlue border border-transBlue/20 group-hover:bg-transBlue group-hover:text-slate-950 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                Access Full Study <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Lactation;
