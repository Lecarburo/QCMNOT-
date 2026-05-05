import { useEffect, useState } from "react";

export const storageKeys = {
  knownFlashcards: "ipv6-known-flashcards",
  reviewedTopics: "ipv6-reviewed-topics",
  bestQuiz: "ipv6-best-quiz",
  bestExam: "ipv6-best-exam",
};

export function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function useLocalStorage(key, fallback) {
  const [value, setValue] = useState(() => readStorage(key, fallback));

  useEffect(() => {
    writeStorage(key, value);
  }, [key, value]);

  return [value, setValue];
}

export function percent(value, total) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}

export function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}
