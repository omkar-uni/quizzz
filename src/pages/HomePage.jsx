import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          w-full max-w-3xl mx-auto text-center
          bg-white/10 backdrop-blur-lg border border-white/10
          p-8 rounded-3xl shadow-xl
        "
      >
        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center shadow-lg">
            <span className="text-4xl">🎯</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300">
            Test Your Knowledge Today
          </span>
        </h1>

        <p className="text-white/80 text-sm lg:text-lg max-w-xl mx-auto mb-8">
          Select from 50+ curated tests, track your performance, compete on the
          leaderboard, and improve your skills — all in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          <button
            onClick={() => navigate("/select-test")}
            className="
              w-full lg:w-auto py-3 px-8 rounded-xl font-bold
              bg-gradient-to-r from-indigo-600 to-blue-600
              shadow-lg hover:scale-[1.02] transition
            "
          >
            Start a Test 🚀
          </button>

          <button
            onClick={() => navigate("/leaderboard")}
            className="
              w-full lg:w-auto py-3 px-8 rounded-xl font-bold
              bg-white/20 border border-white/20
              shadow-lg hover:bg-white/30 hover:scale-[1.02] transition
            "
          >
            View Leaderboard 🏆
          </button>
        </div>

        {/* Features Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 text-white/80 text-sm lg:text-base">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <p className="text-xl mb-2">📘</p>
            <h3 className="font-semibold mb-1">50+ Tests</h3>
            <p>Multiple subjects, structured and ready.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <p className="text-xl mb-2">📊</p>
            <h3 className="font-semibold mb-1">Score Tracking</h3>
            <p>Instant results & progress insights.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <p className="text-xl mb-2">🏆</p>
            <h3 className="font-semibold mb-1">Leaderboard</h3>
            <p>Compete with others & challenge yourself.</p>
          </div>
        </div>

        <p className="mt-8 text-xs text-white/40">
          Start learning, stay consistent — you will improve every day!
        </p>
      </motion.div>
    </div>
  );
}
