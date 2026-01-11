import React from 'react';
import { MessageSquare, Zap, HelpCircle, Brain, Parentheses, UserCheck } from 'lucide-react';

const Rhetoric = () => {
  const techniques = [
    {
      title: "The Brain in a Jar",
      icon: <Brain className="text-transBlue" />,
      scenario: "Suppose your brain was transplanted into a jar. You're still you, just without a body. Are you still a [man/woman]?",
      logic: "If yes, gender is neurobiological/psychological. If no, gender is purely physical. This forces the opponent to define if 'the person' is the body or the mind.",
      category: "Identity"
    },
    {
      title: "The Adoptive Parent Analogy",
      icon: <UserCheck className="text-transPink" />,
      scenario: "We grant the title of 'Parent' to adoptive parents for fulfilling the social role, even if they lack the biological connection.",
      logic: "In almost every social setting, the biological distinction is irrelevant. The same applies to trans women being women in social spaces.",
      category: "Social Roles"
    },
    {
      title: "The Android Test (Nier)",
      icon: <Zap className="text-yellow-400" />,
      scenario: "When you see characters like 2B or 9S, your brain genders them instantly, even though they are non-biological machines.",
      logic: "This proves that gender is a social phenomenon triggered by secondary sex characteristics and presentation, independent of reproductive organs.",
      category: "Perception"
    }
  ];

  return (
    <div className="animate-page px-6 max-w-5xl mx-auto pb-32">
      <header className="mb-16 pt-10">
        <div className="flex items-center gap-3 text-yellow-400 mb-4">
          <MessageSquare size={32} />
          <span className="uppercase tracking-widest font-bold">Rhetorical Strategy</span>
        </div>
        <h1 className="text-6xl font-black mb-6 italic">Rhetoric & Logic</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Data is the ammunition, but rhetoric is the delivery system. Use these
          logical frameworks to deconstruct essentialist arguments.
        </p>
      </header>

      <div className="grid gap-8">
        {techniques.map((tech, idx) => (
          <div key={idx} className="glass-card p-8 group hover:border-transBlue/50 transition-all">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white/5 rounded-2xl">
                {tech.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] uppercase font-black tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded">
                    {tech.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>

                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 mb-6">
                  <h4 className="text-xs uppercase font-bold text-transBlue mb-2 flex items-center gap-2">
                    <HelpCircle size={14} /> The Thought Experiment
                  </h4>
                  <p className="text-slate-200 italic">"{tech.scenario}"</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Zap size={16} className="text-yellow-400" />
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    <span className="text-white font-bold underline decoration-transBlue/30">The Logic:</span> {tech.logic}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The "Mother" Question Section */}
      <section className="mt-20 glass-card p-10 bg-gradient-to-br from-transBlue/10 to-transparent">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Parentheses className="text-transPink" /> The Semantic Trap: "What is a Woman?"
        </h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          When asked for a definition, pivot to the "Contextual Definition" strategy from the masterdoc.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-950/50 rounded-xl border border-white/10">
            <h4 className="font-bold mb-2 text-transBlue">Social Context</h4>
            <p className="text-xs text-slate-400">At a mother-daughter dance, 'Mother' is a social distinction. Biological status is never checked.</p>
          </div>
          <div className="p-6 bg-slate-950/50 rounded-xl border border-white/10">
            <h4 className="font-bold mb-2 text-transPink">Medical Context</h4>
            <p className="text-xs text-slate-400">In a clinical setting for hereditary disease, 'Mother' is a biological distinction. Context dictates the definition.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rhetoric;
