import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar.jsx";

const MotionMain = motion.main;

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden soft-grid">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_34rem)]" />
      <Navbar />
      <MotionMain
        className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.38, ease: "easeOut" }}
      >
        <Outlet />
      </MotionMain>
    </div>
  );
}
