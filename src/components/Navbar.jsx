import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Brain,
  ClipboardCheck,
  Command,
  Home,
  Menu,
  Network,
  Radar,
  ShieldAlert,
  Timer,
  X,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/fiches", label: "Fiches", icon: BookOpen },
  { to: "/flashcards", label: "Flashcards", icon: Brain },
  { to: "/qcm", label: "QCM", icon: ClipboardCheck },
  { to: "/examen", label: "Examen", icon: Timer },
  { to: "/commandes", label: "Commandes", icon: Command },
  { to: "/wireshark", label: "Wireshark", icon: Radar },
  { to: "/schemas", label: "Schemas", icon: Network },
  { to: "/pieges", label: "Pieges", icon: ShieldAlert },
];

function NavItem({ item, onClick }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "focus-ring flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition",
          isActive
            ? "bg-cyan-400/14 text-cyan-100 ring-1 ring-cyan-300/30"
            : "text-slate-300 hover:bg-white/7 hover:text-white",
        ].join(" ")
      }
    >
      <Icon className="h-4 w-4" />
      <span>{item.label}</span>
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="focus-ring flex items-center gap-3 rounded-md">
          <div className="grid h-10 w-10 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/12 text-cyan-200">
            <Network className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">IPv6 Revision</p>
            <p className="text-xs text-slate-400">BUT R&T - QCM SAE2.01</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavItem key={item.to} item={item} />
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-slate-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="grid gap-1 border-t border-white/10 bg-ink/95 px-4 py-3 lg:hidden">
          {navItems.map((item) => (
            <NavItem key={item.to} item={item} onClick={() => setOpen(false)} />
          ))}
        </nav>
      )}
    </header>
  );
}
