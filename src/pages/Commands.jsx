import CommandCard from "../components/CommandCard.jsx";
import { commandGroups } from "../data/commands.js";

const accentMap = {
  cyan: "from-cyan-300/20 to-cyan-300/5 text-cyan-100",
  blue: "from-blue-300/20 to-blue-300/5 text-blue-100",
  violet: "from-violet-300/20 to-violet-300/5 text-violet-100",
  emerald: "from-emerald-300/20 to-emerald-300/5 text-emerald-100",
};

export default function Commands() {
  return (
    <div className="space-y-6">
      <header className="glass rounded-lg p-6">
        <p className="text-sm font-medium text-cyan-200">Commandes a apprendre</p>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">Les commandes qui rapportent des points</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
          Chaque commande a un role simple. Apprends surtout quoi afficher et quoi verifier.
        </p>
      </header>

      <div className="grid gap-5">
        {commandGroups.map((group) => (
          <section key={group.system} className="glass rounded-lg p-5">
            <div className={`rounded-lg bg-gradient-to-r ${accentMap[group.accent]} p-4`}>
              <h2 className="text-2xl font-semibold">{group.system}</h2>
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {group.commands.map((command) => (
                <CommandCard key={command.command} item={command} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
