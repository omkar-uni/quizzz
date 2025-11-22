import { useParams, useNavigate } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";

export default function AdminReviewAttempt() {
  const { attemptId } = useParams();
  const navigate = useNavigate();

  // ---------------- TEMP STATIC DATA ----------------
  // Replace with real DB data later
  const attempt = {
    id: attemptId,
    student: "Rohan Patil",
    grade: "7th",
    testName: "Maths Basics",
    answers: [
      {
        q: "2 + 2 = ?",
        options: ["2", "3", "4", "5"],
        correct: "4",
        selected: "4",
      },
      {
        q: "5 * 2 = ?",
        options: ["7", "10", "12", "15"],
        correct: "10",
        selected: "12",
      },
      {
        q: "10 / 2 = ?",
        options: ["2", "4", "5", "8"],
        correct: "5",
        selected: "5",
      },
    ],
  };
  // -------------------------------------------------

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      <AdminSidebar />

      <main className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-800 p-3 rounded-xl hover:bg-gray-700"
          >
            <ArrowLeft />
          </button>

          <div>
            <h2 className="text-3xl font-bold">Review Test</h2>
            <p className="text-gray-400">
              {attempt.student} • {attempt.testName} • Grade {attempt.grade}
            </p>
          </div>
        </div>

        {/* QUESTIONS */}
        <div className="space-y-6">
          {attempt.answers.map((item, index) => {
            const isCorrect = item.selected === item.correct;

            return (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg"
              >
                {/* QUESTION */}
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">
                    Q{index + 1}. {item.q}
                  </h3>

                  {isCorrect ? (
                    <CheckCircle size={26} className="text-green-400" />
                  ) : (
                    <XCircle size={26} className="text-red-400" />
                  )}
                </div>

                {/* OPTIONS */}
                <div className="mt-4 space-y-3">
                  {item.options.map((opt, i) => {
                    const isSelected = item.selected === opt;
                    const isRight = item.correct === opt;

                    return (
                      <div
                        key={i}
                        className={`p-3 rounded-xl border 
                          ${
                            isRight
                              ? "border-green-500 bg-green-900/20"
                              : isSelected
                              ? "border-red-500 bg-red-900/20"
                              : "border-gray-700 bg-gray-700/40"
                          }
                        `}
                      >
                        {opt}
                      </div>
                    );
                  })}
                </div>

                {/* SELECTED + CORRECT INFO */}
                <div className="mt-4 text-sm text-gray-400">
                  <p>
                    Selected:{" "}
                    <span className="text-white">{item.selected}</span>
                  </p>
                  <p>
                    Correct Answer:{" "}
                    <span className="text-green-400">{item.correct}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
