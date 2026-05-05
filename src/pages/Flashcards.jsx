import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Flashcard from "../components/Flashcard.jsx";
import ProgressCard from "../components/ProgressCard.jsx";
import { flashcards } from "../data/flashcards.js";
import { storageKeys, useLocalStorage } from "../utils/storage.js";

export default function Flashcards() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [knownCards, setKnownCards] = useLocalStorage(storageKeys.knownFlashcards, []);
  const card = flashcards[index];

  const known = useMemo(() => knownCards.includes(card.id), [card.id, knownCards]);

  function go(nextIndex) {
    setIndex((nextIndex + flashcards.length) % flashcards.length);
    setRevealed(false);
  }

  function markKnown() {
    setKnownCards((current) => (current.includes(card.id) ? current : [...current, card.id]));
    go(index + 1);
  }

  function markUnknown() {
    setKnownCards((current) => current.filter((id) => id !== card.id));
    go(index + 1);
  }

  return (
    <div className="space-y-6">
      <header className="grid gap-4 lg:grid-cols-[1fr_20rem]">
        <div className="glass rounded-lg p-6">
          <p className="text-sm font-medium text-cyan-200">Flashcards</p>
          <h1 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">Reciter avant de regarder</h1>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Le but est de transformer les points pieges en reflexes : fe80, ff02, NDP, ICMPv6 et commandes.
          </p>
        </div>
        <ProgressCard title="Cartes connues" value={knownCards.length} total={flashcards.length} />
      </header>

      <div className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
        <button
          type="button"
          onClick={() => go(index - 1)}
          className="focus-ring inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Precedente
        </button>
        <p className="text-sm text-slate-300">
          {index + 1} / {flashcards.length}
        </p>
        <button
          type="button"
          onClick={() => go(index + 1)}
          className="focus-ring inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10"
        >
          Suivante
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <Flashcard
        card={card}
        revealed={revealed}
        known={known}
        onReveal={() => setRevealed(true)}
        onKnown={markKnown}
        onUnknown={markUnknown}
        onReset={() => setKnownCards((current) => current.filter((id) => id !== card.id))}
      />
    </div>
  );
}
