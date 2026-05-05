import { motion } from "framer-motion";
import { Eye, RotateCcw, ThumbsDown, ThumbsUp } from "lucide-react";

const MotionSection = motion.section;

export default function Flashcard({ card, revealed, known, onReveal, onKnown, onUnknown, onReset }) {
  return (
    <MotionSection
      key={card.id}
      className="glass min-h-[22rem] rounded-lg p-6 sm:p-8"
      initial={{ opacity: 0, rotateX: -8, y: 18 }}
      animate={{ opacity: 1, rotateX: 0, y: 0 }}
      transition={{ duration: 0.28 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
          Flashcard IPv6
        </span>
        {known && (
          <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Deja connue
          </span>
        )}
      </div>

      <div className="mt-8">
        <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Question</p>
        <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-4xl">{card.question}</h2>
      </div>

      <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-5">
        <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Reponse</p>
        <p className="mt-3 min-h-16 text-lg leading-8 text-slate-100">
          {revealed ? card.answer : "Essaie de repondre mentalement avant d'afficher la correction."}
        </p>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onReveal}
          className="focus-ring inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          <Eye className="h-4 w-4" />
          Voir la reponse
        </button>
        <button
          type="button"
          onClick={onKnown}
          className="focus-ring inline-flex items-center gap-2 rounded-md bg-emerald-400/14 px-4 py-2.5 text-sm font-semibold text-emerald-100 ring-1 ring-emerald-300/25 transition hover:bg-emerald-400/20"
        >
          <ThumbsUp className="h-4 w-4" />
          Je savais
        </button>
        <button
          type="button"
          onClick={onUnknown}
          className="focus-ring inline-flex items-center gap-2 rounded-md bg-rose-400/12 px-4 py-2.5 text-sm font-semibold text-rose-100 ring-1 ring-rose-300/20 transition hover:bg-rose-400/18"
        >
          <ThumbsDown className="h-4 w-4" />
          Je ne savais pas
        </button>
        <button
          type="button"
          onClick={onReset}
          className="focus-ring inline-flex items-center gap-2 rounded-md bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 ring-1 ring-white/10 transition hover:bg-white/10"
        >
          <RotateCcw className="h-4 w-4" />
          Revoir
        </button>
      </div>
    </MotionSection>
  );
}
