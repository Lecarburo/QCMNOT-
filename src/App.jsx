import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Commands from "./pages/Commands.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Exam from "./pages/Exam.jsx";
import Flashcards from "./pages/Flashcards.jsx";
import Lessons from "./pages/Lessons.jsx";
import Pitfalls from "./pages/Pitfalls.jsx";
import Quiz from "./pages/Quiz.jsx";
import Schemas from "./pages/Schemas.jsx";
import Wireshark from "./pages/Wireshark.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/fiches" element={<Lessons />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/qcm" element={<Quiz />} />
        <Route path="/examen" element={<Exam />} />
        <Route path="/commandes" element={<Commands />} />
        <Route path="/wireshark" element={<Wireshark />} />
        <Route path="/schemas" element={<Schemas />} />
        <Route path="/pieges" element={<Pitfalls />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
