import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Award, Clock, BookOpen, LogOut, User } from "lucide-react";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const student = JSON.parse(sessionStorage.getItem("student-info"));
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const myResults = storedResults.filter(
      (r) => r.name === student?.name && r.grade === student?.grade
    );
    setResults(myResults);
  }, []);

  if (!student) {
    return (
      <div className="text-center text-white mt-20">
        Invalid session!
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 p-3 rounded-lg"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-5 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Top Section */}
      <div className="flex items-center gap-4 bg-gray-800/60 backdrop-blur-md p-4 rounded-2xl shadow-xl">
        <div className="bg-blue-600 p-4 rounded-full">
          <User size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Hello, {student.name} 👋</h1>
          <p className="text-gray-300 text-sm">Grade {student.grade}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-800/70 p-5 rounded-2xl shadow-lg space-y-2 hover:bg-gray-800 transition">
          <BookOpen size={28} className="text-blue-400" />
          <p className="text-sm text-gray-300">Total Tests</p>
          <p className="text-xl font-bold">{results.length}</p>
        </div>

        <div className="bg-gray-800/70 p-5 rounded-2xl shadow-lg space-y-2 hover:bg-gray-800 transition">
          <Award size={28} className="text-green-400" />
          <p className="text-sm text-gray-300">Best Score</p>
          <p className="text-xl font-bold">
            {results.length ? Math.max(...results.map((r) => r.score)) : "—"}
          </p>
        </div>
      </div>

      {/* Results Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Test History</h2>

        {results.length === 0 ? (
          <p className="opacity-70 text-center">No tests attempted yet.</p>
        ) : (
          <div className="space-y-4">
            {results.map((r, i) => (
              <div
                key={i}
                className="bg-gray-800/70 p-5 rounded-xl shadow-lg hover:bg-gray-800 cursor-pointer transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold">{r.testName}</h3>
                    <p className="text-sm text-gray-300">
                      Score: {r.score}/{r.total}
                    </p>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Clock size={16} />
                      <span>{r.timeTaken}s</span>
                    </div>
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <button
                      onClick={() => navigate(`/review/${r.testId}`)}
                      className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-lg text-sm"
                    >
                      Review
                    </button>

                    <button
                      onClick={() => navigate("/leaderboard")}
                      className="bg-yellow-600 hover:bg-yellow-700 px-4 py-1 rounded-lg text-sm"
                    >
                      Leaderboard
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Logout */}
      <button
        onClick={() => {
          sessionStorage.clear();
          navigate("/");
        }}
        className="w-full mt-10 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 p-3 rounded-xl text-lg font-semibold transition"
      >
        <LogOut size={20} /> Logout
      </button>
    </div>
  );
}
