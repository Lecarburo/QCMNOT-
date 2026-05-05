import { AlertTriangle } from "lucide-react";
import { pitfalls } from "../data/pitfalls.js";

export default function Pitfalls() {
  return (
    <div className="space-y-6">
      <header className="glass rounded-lg p-6">
        <p className="text-sm font-medium text-cyan-200">Pieges du QCM</p>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">Les affirmations a ne pas rater</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
          Relis cette page juste avant le QCM. Ce sont les points faciles a confondre.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {pitfalls.map((pitfall, index) => (
          <article key={pitfall} className="glass flex gap-4 rounded-lg p-5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-amber-300/14 text-amber-200 ring-1 ring-amber-300/25">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Piege {index + 1}</p>
              <p className="mt-2 font-medium leading-7 text-white">{pitfall}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
