import { useMemo, useState } from "react";
import TopicCard from "../components/TopicCard.jsx";
import { topics } from "../data/topics.js";
import { storageKeys, useLocalStorage } from "../utils/storage.js";

const categories = ["Toutes", ...new Set(topics.map((topic) => topic.category))];

export default function Lessons() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [reviewedTopics, setReviewedTopics] = useLocalStorage(storageKeys.reviewedTopics, []);

  const filteredTopics = useMemo(() => {
    if (activeCategory === "Toutes") return topics;
    return topics.filter((topic) => topic.category === activeCategory);
  }, [activeCategory]);

  function toggleTopic(topicId) {
    setReviewedTopics((current) =>
      current.includes(topicId) ? current.filter((id) => id !== topicId) : [...current, topicId],
    );
  }

  return (
    <div className="space-y-6">
      <header className="glass rounded-lg p-6">
        <p className="text-sm font-medium text-cyan-200">Fiches de cours</p>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">Tout IPv6 en fiches courtes</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
          Lis une fiche, recite le point cle, puis marque-la comme revisee. Les fiches sont volontairement
          compactes pour aller vite avant un QCM.
        </p>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={[
              "focus-ring shrink-0 rounded-md px-4 py-2 text-sm font-medium transition",
              activeCategory === category
                ? "bg-cyan-300 text-slate-950"
                : "bg-white/5 text-slate-300 ring-1 ring-white/10 hover:bg-white/10",
            ].join(" ")}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {filteredTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            reviewed={reviewedTopics.includes(topic.id)}
            onToggle={toggleTopic}
          />
        ))}
      </div>
    </div>
  );
}
