import { CheckCircle2, XCircle } from "lucide-react";

export default function QuizCard({ question, selected, locked, onSelect, showExplanation = true }) {
  return (
    <article className="glass rounded-lg p-5 sm:p-6">
      <p className="text-sm font-medium text-cyan-200">Question</p>
      <h2 className="mt-2 text-xl font-semibold leading-8 text-white">{question.question}</h2>

      <div className="mt-5 grid gap-3">
        {question.options.map((option, index) => {
          const isSelected = selected === index;
          const isRight = question.answer === index;
          const shouldColor = locked && (isSelected || isRight);
          const className = shouldColor
            ? isRight
              ? "border-emerald-300/45 bg-emerald-400/14 text-emerald-50"
              : "border-rose-300/45 bg-rose-400/14 text-rose-50"
            : isSelected
              ? "border-cyan-300/45 bg-cyan-400/12 text-cyan-50"
              : "border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]";

          return (
            <button
              key={option}
              type="button"
              disabled={locked}
              onClick={() => onSelect(index)}
              className={`focus-ring flex min-h-12 items-center justify-between gap-3 rounded-md border px-4 py-3 text-left text-sm font-medium transition ${className}`}
            >
              <span>{option}</span>
              {locked && isRight && <CheckCircle2 className="h-4 w-4 shrink-0" />}
              {locked && isSelected && !isRight && <XCircle className="h-4 w-4 shrink-0" />}
            </button>
          );
        })}
      </div>

      {locked && showExplanation && (
        <div className="mt-5 rounded-md border border-cyan-300/18 bg-cyan-300/8 p-4 text-sm leading-6 text-cyan-50">
          {question.explanation}
        </div>
      )}
    </article>
  );
}
