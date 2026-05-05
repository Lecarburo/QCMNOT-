import { useEffect, useState } from "react";
import { CheckCircle2, RotateCcw, Timer } from "lucide-react";
import QuizCard from "../components/QuizCard.jsx";
import { quizQuestions } from "../data/quizQuestions.js";
import { percent, shuffle, storageKeys, useLocalStorage } from "../utils/storage.js";

const EXAM_SIZE = 20;
const EXAM_SECONDS = 10 * 60;

function scoreMessage(score) {
  if (score < 50) return "A revoir";
  if (score < 70) return "Correct mais fragile";
  if (score < 85) return "Bien";
  return "Pret pour le QCM";
}

export default function Exam() {
  const [examQuestions, setExamQuestions] = useState(() => shuffle(quizQuestions).slice(0, EXAM_SIZE));
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(EXAM_SECONDS);
  const [bestExam, setBestExam] = useLocalStorage(storageKeys.bestExam, 0);

  const score = examQuestions.reduce((total, question) => total + (answers[question.id] === question.answer ? 1 : 0), 0);
  const finalPercent = percent(score, examQuestions.length);

  useEffect(() => {
    if (finished) return undefined;
    if (secondsLeft <= 0) {
      setFinished(true);
      setBestExam((best) => Math.max(best, finalPercent));
      return undefined;
    }
    const timer = window.setInterval(() => setSecondsLeft((value) => value - 1), 1000);
    return () => window.clearInterval(timer);
  }, [finalPercent, finished, secondsLeft, setBestExam]);

  function finishExam() {
    setFinished(true);
    setBestExam((best) => Math.max(best, finalPercent));
  }

  function restart() {
    setExamQuestions(shuffle(quizQuestions).slice(0, EXAM_SIZE));
    setAnswers({});
    setFinished(false);
    setSecondsLeft(EXAM_SECONDS);
  }

  const minutes = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  if (finished) {
    return (
      <div className="space-y-6">
        <section className="glass rounded-lg p-8 text-center">
          <p className="text-sm font-medium text-cyan-200">Resultat examen</p>
          <h1 className="mt-3 text-5xl font-semibold text-white">{finalPercent}%</h1>
          <p className="mt-3 text-xl font-semibold text-cyan-100">{scoreMessage(finalPercent)}</p>
          <p className="mt-3 text-slate-300">
            {score} / {examQuestions.length} bonnes reponses. Meilleur score : {Math.max(bestExam, finalPercent)}%.
          </p>
          <button
            type="button"
            onClick={restart}
            className="focus-ring mt-7 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
          >
            <RotateCcw className="h-4 w-4" />
            Nouvel examen
          </button>
        </section>

        <section className="grid gap-4">
          {examQuestions.map((question, index) => (
            <div key={question.id} className="space-y-2">
              <p className="text-sm text-slate-400">Correction {index + 1}</p>
              <QuizCard
                question={question}
                selected={answers[question.id]}
                locked
                onSelect={() => {}}
                showExplanation
              />
            </div>
          ))}
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="glass rounded-lg p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-cyan-200">Mode examen</p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">20 questions aleatoires</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              Pas de correction immediate. Reponds, termine l'examen, puis analyse tes erreurs.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3">
            <Timer className="h-5 w-5 text-cyan-200" />
            <span className="font-mono text-lg font-semibold text-white">
              {minutes}:{seconds}
            </span>
          </div>
        </div>
      </header>

      <div className="grid gap-4">
        {examQuestions.map((question, index) => (
          <article key={question.id} className="glass rounded-lg p-5">
            <p className="text-sm text-cyan-200">Question {index + 1}</p>
            <h2 className="mt-2 text-lg font-semibold leading-7 text-white">{question.question}</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {question.options.map((option, optionIndex) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setAnswers((current) => ({ ...current, [question.id]: optionIndex }))}
                  className={[
                    "focus-ring min-h-12 rounded-md border px-4 py-3 text-left text-sm font-medium transition",
                    answers[question.id] === optionIndex
                      ? "border-cyan-300/45 bg-cyan-400/14 text-cyan-50"
                      : "border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]",
                  ].join(" ")}
                >
                  {option}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="sticky bottom-4 z-10 flex justify-center">
        <button
          type="button"
          onClick={finishExam}
          className="focus-ring inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-200"
        >
          <CheckCircle2 className="h-4 w-4" />
          Terminer l'examen
        </button>
      </div>
    </div>
  );
}
