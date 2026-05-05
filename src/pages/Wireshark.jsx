import { Radar } from "lucide-react";
import { commandGroups } from "../data/commands.js";

const filters = commandGroups.find((group) => group.system === "Wireshark").commands;

export default function Wireshark() {
  return (
    <div className="space-y-6">
      <header className="glass rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-cyan-300/12 text-cyan-200 ring-1 ring-cyan-300/25">
            <Radar className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-cyan-200">Wireshark IPv6</p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">Lire une capture sans paniquer</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              En TP, l'objectif est de reconnaitre les messages NDP et de relier la capture a ce que fait la machine.
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filters.map((filter) => (
          <article key={filter.command} className="glass rounded-lg p-5">
            <code className="code-chip rounded-md px-3 py-2 text-sm">{filter.command}</code>
            <h2 className="mt-4 text-lg font-semibold text-white">{filter.role}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              A utiliser quand tu veux isoler rapidement ce type de paquet dans une capture de TP.
            </p>
          </article>
        ))}
      </section>

      <section className="glass rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-white">Sequence typique pendant un ping IPv6</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {[
            ["1", "Neighbor Solicitation", "La source demande qui possede l'adresse cible."],
            ["2", "Neighbor Advertisement", "La cible repond avec son adresse MAC."],
            ["3", "Echo Request", "Le paquet de ping IPv6 part vers la cible."],
            ["4", "Echo Reply", "La cible repond : la connectivite fonctionne."],
          ].map(([step, title, text]) => (
            <div key={step} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-cyan-300 text-sm font-bold text-slate-950">
                {step}
              </span>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-white">Ce qu'il faut expliquer dans une capture</h2>
        <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-2">
          <li className="rounded-md bg-white/[0.04] p-4">Les adresses source et destination IPv6.</li>
          <li className="rounded-md bg-white/[0.04] p-4">Le type ICMPv6 : 133, 134, 135 ou 136.</li>
          <li className="rounded-md bg-white/[0.04] p-4">Le role du paquet : chercher un voisin, annoncer un routeur, tester par ping.</li>
          <li className="rounded-md bg-white/[0.04] p-4">La difference entre multicast ff02:: et adresse unicast de machine.</li>
        </ul>
      </section>
    </div>
  );
}
