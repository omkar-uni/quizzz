import { useEffect, useState } from "react";

export default function Leaderboard({ onBack }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [testFilter, setTestFilter] = useState("All");
  const [sortType, setSortType] = useState("score");

  const medals = ["🥇", "🥈", "🥉"];

  async function loadLeaderboard() {
    try {
      const res = await fetch("http://localhost:3000/api/getLeaderboard");
      const data = await res.json();

      if (sortType === "score") {
        data.sort((a, b) => b.score - a.score);
      } else {
        data.sort((a, b) => a.timeTaken - b.timeTaken);
      }

      setResults(data);
    } catch (err) {
      console.error("Failed to load leaderboard:", err);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadLeaderboard();
    const interval = setInterval(() => loadLeaderboard(), 10000);
    return () => clearInterval(interval);
  }, [sortType]);

  const filteredResults = results.filter((r) => {
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase());
    const matchTest = testFilter === "All" || r.testName === testFilter;
    return matchSearch && matchTest;
  });

  const testTypes = [...new Set(results.map((r) => r.testName))];

  return (
    <div className="w-full min-h-screen p-6 md:p-10 text-white">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* ===== Title + Back Button ===== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            🏆 Leaderboard
          </h1>

          <button
            onClick={onBack}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg font-semibold"
          >
            ⬅ Back
          </button>
        </div>

        {/* ===== Filters Section ===== */}
        <div
          className="
            bg-white/10 backdrop-blur-xl border border-white/20
            rounded-2xl p-6 shadow-md
            flex flex-col md:flex-row gap-6 md:items-center
          "
        >
          {/* Search (Smaller UI) */}
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              px-3 py-2
              rounded-lg
              bg-white/5
              border border-white/10
              text-white
              placeholder-white/50
              w-full
              text-sm
              focus:outline-none
              focus:ring-1 focus:ring-blue-400
            "
          />

          {/* Test Filter */}
          <select
            value={testFilter}
            onChange={(e) => setTestFilter(e.target.value)}
            className="
              px-3 py-2 rounded-lg bg-white/5 border border-white/20
              text-white text-sm
              focus:outline-none focus:ring-1 focus:ring-blue-400
            "
          >
            <option value="All" className="text-black">
              All Tests
            </option>
            {testTypes.map((t, i) => (
              <option key={i} value={t} className="text-black">
                {t}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="
              px-3 py-2 rounded-lg bg-white/5 border border-white/20
              text-white text-sm
              focus:outline-none focus:ring-1 focus:ring-blue-400
            "
          >
            <option value="score" className="text-black">
              Sort by Score (High → Low)
            </option>
            <option value="time" className="text-black">
              Sort by Time (Fastest → Slowest)
            </option>
          </select>
        </div>

        {/* ===== Loading ===== */}
        {loading && (
          <p className="text-center text-white/70 text-lg">
            Loading leaderboard...
          </p>
        )}

        {/* ===== No Results ===== */}
        {!loading && filteredResults.length === 0 && (
          <p className="text-center text-white/70 text-lg">
            No matching entries found.
          </p>
        )}

        {/* ===== Table Full Screen ===== */}
        {!loading && filteredResults.length > 0 && (
          <div
            className="
              bg-white/10 backdrop-blur-xl border border-white/20
              rounded-2xl shadow-2xl p-6
              overflow-x-auto w-full
            "
          >
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="border-b border-white/20 text-white/70 uppercase text-xs md:text-sm">
                  <th className="py-4">Rank</th>
                  <th className="py-4">Name</th>
                  <th className="py-4">Test</th>
                  <th className="py-4">Score</th>
                  <th className="py-4">Time</th>
                </tr>
              </thead>

              <tbody>
                {filteredResults.map((r, i) => (
                  <tr
                    key={i}
                    className="
                      border-b border-white/10
                      hover:bg-white/5 transition-all duration-300
                      text-sm md:text-base
                    "
                    style={{
                      animation: `fadeIn 0.4s ease ${i * 0.03}s`,
                    }}
                  >
                    <td className="py-4 font-bold">
                      {i < 3 ? medals[i] : `#${i + 1}`}
                    </td>
                    <td className="py-4">{r.name}</td>
                    <td className="py-4">{r.testName}</td>
                    <td className="py-4">
                      {r.score} / {r.total}
                    </td>
                    <td className="py-4">{r.timeTaken}s</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
  