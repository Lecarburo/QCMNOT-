import { Link } from "react-router-dom";
import {
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Command,
  Radar,
  Timer,
} from "lucide-react";
import { motion } from "framer-motion";
import ProgressCard from "../components/ProgressCard.jsx";
import { flashcards } from "../data/flashcards.js";
import { notionBadges, topics } from "../data/topics.js";
import { percent, useLocalStorage, storageKeys } from "../utils/storage.js";

const MotionDiv = motion.div;

const quickLinks = [
  { to: "/fiches", label: "Reviser les notions", icon: BookOpen },
  { to: "/flashcards", label: "Flashcards", icon: Brain },
  { to: "/qcm", label: "QCM d'entrainement", icon: ClipboardCheck },
  { to: "/examen", label: "Mode examen", icon: Timer },
  { to: "/commandes", label: "Commandes", icon: Command },
  { to: "/wireshark", label: "Wireshark", icon: Radar },
];

export default function Dashboard() {
  const [knownFlashcards] = useLocalStorage(storageKeys.knownFlashcards, []);
  const [reviewedTopics] = useLocalStorage(storageKeys.reviewedTopics, []);
  const [bestQuiz] = useLocalStorage(storageKeys.bestQuiz, 0);
  const [bestExam] = useLocalStorage(storageKeys.bestExam, 0);

  const globalProgress = Math.round(
    (percent(knownFlashcards.length, flashcards.length) +
      percent(reviewedTopics.length, topics.length) +
      bestQuiz +
      bestExam) /
      4,
  );

  return (
    <div className="space-y-8">
      <section className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass rounded-lg p-6 sm:p-8">
          <MotionDiv initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
              QCM IPv6 cette semaine
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Reviser IPv6 vite, proprement, sans te disperser.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              Fiches courtes, flashcards, QCM corrige et mode examen pour couvrir cours, TD8 et TP1 SAE2.01 :
              adressage, NDP, SLAAC, Cisco, routage statique et Wireshark.
            </p>
          </MotionDiv>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="focus-ring group flex min-h-24 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-cyan-300/12 text-cyan-200 ring-1 ring-cyan-300/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-white">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="glass rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-md bg-violet-300/14 text-violet-200 ring-1 ring-violet-300/25">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Progression globale</p>
              <p className="text-4xl font-semibold text-white">{globalProgress}%</p>
            </div>
          </div>
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
              style={{ width: `${globalProgress}%` }}
            />
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-300">
            Priorite : maitriser les prefixes, les types ICMPv6 133-136, la sequence NDP avant ping
            et les commandes Cisco de verification.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ProgressCard title="Fiches revisees" value={reviewedTopics.length} total={topics.length} icon={BookOpen} />
        <ProgressCard title="Flashcards connues" value={knownFlashcards.length} total={flashcards.length} icon={Brain} />
        <ProgressCard title="Meilleur QCM" value={bestQuiz} icon={ClipboardCheck} helper="Score sauvegarde" />
        <ProgressCard title="Meilleur examen" value={bestExam} icon={Timer} helper="20 questions aleatoires" />
      </section>

      <section className="glass rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-white">Notions principales a maitriser</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {notionBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-sm font-medium text-slate-200"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
