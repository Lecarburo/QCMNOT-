import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CommandCard({ item }) {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    await navigator.clipboard.writeText(item.command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
      <div className="flex items-start justify-between gap-3">
        <code className="code-chip break-all rounded-md px-2.5 py-1.5 text-sm">{item.command}</code>
        <button
          type="button"
          onClick={copyCommand}
          className="focus-ring grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/6 text-slate-200 ring-1 ring-white/10 transition hover:bg-white/12"
          aria-label="Copier la commande"
          title="Copier"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{item.role}</p>
      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500">Exemple</p>
      <pre className="mt-2 overflow-x-auto rounded-md bg-slate-950/70 p-3 text-xs text-slate-200">
        <code>{item.example}</code>
      </pre>
    </article>
  );
}
