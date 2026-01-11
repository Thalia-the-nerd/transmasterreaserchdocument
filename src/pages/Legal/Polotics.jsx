import React from 'react';
import { Vote, Users, Landmark, ArrowRight } from 'lucide-react';

const Politics = () => {
  const votingData = [
    {
      bill: "Equality Act (H.R. 15)",
      desc: "Codifies anti-discrimination protections in housing, employment, and public spaces.",
      year: "2025",
      dem: 100, // % Support
      rep: 0,
      status: "Introduced / 119th Congress"
    },
    {
      bill: "Inflation Reduction Act",
      desc: "Taxes wealthy corporations to fund clean energy and lower drug costs.",
      year: "2022-2025",
      dem: 100,
      rep: 0,
      status: "Became Law"
    },
    {
      bill: "Marriage Equality (H.R. 8404)",
      desc: "Protects interracial and same-sex marriage rights at the federal level.",
      year: "2024",
      dem: 100,
      rep: 22.3,
      status: "Became Law"
    },
    {
      bill: "PROTECTS Act (H.R. 742)",
      desc: "Attempts to ban gender-affirming care for minors nationwide.",
      year: "2025",
      dem: 0,
      rep: 98.5,
      status: "Introduced / 119th Congress"
    }
  ];

  return (
    <div className="animate-page px-6 max-w-6xl mx-auto pb-32">
      <header className="mb-16 pt-10">
        <div className="flex items-center gap-3 text-transPink mb-4">
          <Landmark size={32} />
          <span className="uppercase tracking-widest font-bold">Policy & Legislation</span>
        </div>
        <h1 className="text-6xl font-black mb-6">Voting Realities</h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          A data-driven breakdown of how the major U.S. political parties vote on
          human rights, economic stability, and healthcare access.
        </p>
      </header>

      <div className="space-y-8">
        {votingData.map((item, idx) => (
          <div key={idx} className="glass-card p-8 group">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              {/* Left Side: Bill Info */}
              <div className="lg:w-1/3">
                <span className="text-xs font-mono text-slate-500 mb-2 block">{item.status}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{item.bill}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>

              {/* Right Side: Visual Comparison */}
              <div className="lg:w-2/3 flex flex-col justify-center">
                <div className="space-y-4">
                  {/* Democratic Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-tighter mb-1">
                      <span className="text-blue-400">Democratic Support</span>
                      <span>{item.dem}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-1000"
                        style={{ width: `${item.dem}%` }}
                      />
                    </div>
                  </div>

                  {/* Republican Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-tighter mb-1">
                      <span className="text-red-400">Republican Support</span>
                      <span>{item.rep}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all duration-1000"
                        style={{ width: `${item.rep}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20 glass-card p-10 bg-transBlue/5 border-transBlue/20">
        <h2 className="text-3xl font-bold mb-6">Summary of the Masterdoc</h2>
        <p className="text-slate-300 leading-relaxed italic">
          "The data shows a binary split: one party consistently votes to expand the definitions
          of personhood and civil rights, while the other consistently votes to restrict
          access based on a concept of 'Biological Sex' that the scientific community
          labels as incomplete."
        </p>
      </section>
    </div>
  );
};

export default Politics;
