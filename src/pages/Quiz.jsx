import { useState } from "react";
import { RotateCcw } from "lucide-react";
import QuizCard from "../components/QuizCard.jsx";
import { quizQuestions } from "../data/quizQuestions.js";
import { percent, storageKeys, useLocalStorage } from "../utils/storage.js";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [bestQuiz, setBestQuiz] = useLocalStorage(storageKeys.bestQuiz, 0);
  const question = quizQuestions[current];
  const finished = current >= quizQuestions.length;

  function selectAnswer(index) {
    setSelected(index);
    setLocked(true);
    if (index === question.answer) {
      setScore((value) => value + 1);
    }
  }

  function nextQuestion() {
    const next = current + 1;
    if (next >= quizQuestions.length) {
      const finalScore = percent(score, quizQuestions.length);
      setBestQuiz((best) => Math.max(best, finalScore));
    }
    setCurrent(next);
    setSelected(null);
    setLocked(false);
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setLocked(false);
    setScore(0);
  }

  if (finished) {
    const finalScore = percent(score, quizQuestions.length);
    return (
      <section className="glass mx-auto max-w-3xl rounded-lg p-8 text-center">
        <p className="text-sm font-medium text-cyan-200">QCM termine</p>
        <h1 className="mt-3 text-5xl font-semibold text-white">{finalScore}%</h1>
        <p className="mt-4 text-slate-300">
          Score : {score} / {quizQuestions.length}. Meilleur score sauvegarde : {Math.max(bestQuiz, finalScore)}%.
        </p>
        <button
          type="button"
          onClick={restart}
          className="focus-ring mt-7 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
        >
          <RotateCcw className="h-4 w-4" />
          Recommencer
        </button>
      </section>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <header className="glass rounded-lg p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-cyan-200">QCM d'entrainement</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Correction immediate</h1>
          </div>
          <p className="rounded-md bg-white/5 px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10">
            {current + 1} / {quizQuestions.length} - Score {score}
          </p>
        </div>
      </header>

      <QuizCard question={question} selected={selected} locked={locked} onSelect={selectAnswer} />

      <div className="flex justify-end">
        <button
          type="button"
          disabled={!locked}
          onClick={nextQuestion}
          className="focus-ring rounded-md bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {current + 1 === quizQuestions.length ? "Voir le score" : "Question suivante"}
        </button>
      </div>
    </div>
  );
}
