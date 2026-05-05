import { CheckCircle2, Circle } from "lucide-react";
import { motion } from "framer-motion";

const MotionArticle = motion.article;

export default function TopicCard({ topic, reviewed, onToggle }) {
  return (
    <MotionArticle
      layout
      className="glass rounded-lg p-5"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
            {topic.category}
          </span>
          <h3 className="mt-4 text-xl font-semibold text-white">{topic.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{topic.summary}</p>
        </div>
        <button
          type="button"
          onClick={() => onToggle(topic.id)}
          className={[
            "focus-ring inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition",
            reviewed
              ? "bg-emerald-400/14 text-emerald-200 ring-1 ring-emerald-300/25"
              : "bg-white/5 text-slate-300 ring-1 ring-white/10 hover:bg-white/10",
          ].join(" ")}
        >
          {reviewed ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
          {reviewed ? "Revise" : "A reviser"}
        </button>
      </div>

      <div className="mt-4 rounded-md border border-violet-300/16 bg-violet-300/8 p-3 text-sm text-violet-100">
        {topic.keyPoint}
      </div>

      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
        {topic.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {topic.examples.map((example) => (
          <code key={example} className="code-chip rounded-md px-2.5 py-1 text-xs">
            {example}
          </code>
        ))}
      </div>
    </MotionArticle>
  );
}
