import { Network, Router, Server } from "lucide-react";

function Node({ x, y, label, sublabel, type }) {
  const Icon = type === "router" ? Router : type === "switch" ? Network : Server;
  return (
    <foreignObject x={x - 70} y={y - 48} width="140" height="96">
      <div className="grid h-full place-items-center rounded-lg border border-cyan-300/24 bg-slate-950/82 p-3 text-center shadow-glow">
        <Icon className="h-6 w-6 text-cyan-200" />
        <p className="mt-2 text-sm font-semibold text-white">{label}</p>
        <p className="text-[11px] text-slate-400">{sublabel}</p>
      </div>
    </foreignObject>
  );
}

function LinkLine({ x1, x2, y }) {
  return <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(103,232,249,0.55)" strokeWidth="3" />;
}

export default function Schemas() {
  return (
    <div className="space-y-6">
      <header className="glass rounded-lg p-6">
        <p className="text-sm font-medium text-cyan-200">Schemas</p>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">Visualiser les deux cas du TP</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
          Le QCM peut te demander de raisonner sur meme lien local, routeur, passerelle et routes statiques.
        </p>
      </header>

      <section className="glass rounded-lg p-5">
        <h2 className="text-2xl font-semibold text-white">Schema 1 : PC1 -- Switch -- PC2</h2>
        <div className="mt-5 overflow-x-auto rounded-lg border border-white/10 bg-slate-950/55 p-3">
          <svg viewBox="0 0 760 240" className="h-64 min-w-[620px] w-full" role="img" aria-label="PC1 Switch PC2">
            <defs>
              <marker id="dot" markerWidth="8" markerHeight="8" refX="4" refY="4">
                <circle cx="4" cy="4" r="3" fill="rgb(103,232,249)" />
              </marker>
            </defs>
            <LinkLine x1={180} x2={330} y={120} />
            <LinkLine x1={430} x2={580} y={120} />
            <Node x={120} y={120} label="PC1" sublabel="fe80::/10" />
            <Node x={380} y={120} label="Switch" sublabel="meme lien" type="switch" />
            <Node x={640} y={120} label="PC2" sublabel="fe80::/10" />
          </svg>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {[
            "Meme lien local : les adresses fe80 peuvent suffire.",
            "Le switch ne route pas, il relie les machines du meme lien.",
            "Le ping link-local peut demander %eth0 ou %12.",
            "Wireshark montre souvent NS/NA puis Echo Request/Reply.",
          ].map((item) => (
            <p key={item} className="rounded-md bg-white/[0.045] p-4 text-sm leading-6 text-slate-300">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="glass rounded-lg p-5">
        <h2 className="text-2xl font-semibold text-white">Schema 2 : PC1 -- Routeur Cisco -- PC2</h2>
        <div className="mt-5 overflow-x-auto rounded-lg border border-white/10 bg-slate-950/55 p-3">
          <svg viewBox="0 0 840 280" className="h-72 min-w-[700px] w-full" role="img" aria-label="PC1 Routeur Cisco PC2">
            <LinkLine x1={180} x2={360} y={130} />
            <LinkLine x1={480} x2={660} y={130} />
            <Node x={120} y={130} label="PC1" sublabel="2001:db8:1::10/64" />
            <Node x={420} y={130} label="Cisco" sublabel="routage IPv6" type="router" />
            <Node x={720} y={130} label="PC2" sublabel="2001:db8:2::10/64" />
            <text x="205" y="105" fill="rgb(165,243,252)" fontSize="13">2001:db8:1::/64</text>
            <text x="505" y="105" fill="rgb(165,243,252)" fontSize="13">2001:db8:2::/64</text>
            <text x="285" y="175" fill="rgb(203,213,225)" fontSize="12">GW PC1 : 2001:db8:1::1</text>
            <text x="490" y="175" fill="rgb(203,213,225)" fontSize="12">GW PC2 : 2001:db8:2::1</text>
          </svg>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-5">
          {[
            "Deux reseaux IPv6 differents.",
            "Chaque PC a une passerelle.",
            "Le routeur doit avoir ipv6 unicast-routing.",
            "Les interfaces Cisco doivent etre adressees et no shutdown.",
            "Pour un autre binome, il faut des routes statiques.",
          ].map((item) => (
            <p key={item} className="rounded-md bg-white/[0.045] p-4 text-sm leading-6 text-slate-300">
              {item}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
