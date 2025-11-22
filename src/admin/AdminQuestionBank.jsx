import AdminSidebar from "./components/AdminSidebar";
import { Plus, Pencil, Trash2, ListChecks } from "lucide-react";

export default function AdminQuestionBank() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of India?",
      correct: "New Delhi",
      test: "General Knowledge",
    },
    {
      id: 2,
      question: "2 + 2 = ?",
      correct: "4",
      test: "Maths Basics",
    },
    {
      id: 3,
      question: "Which is a verb?",
      correct: "Run",
      test: "English Grammar",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {/* Page Title */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <ListChecks size={30} className="text-blue-400" />
            Question Bank
          </h2>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl shadow-lg">
            <Plus size={20} /> Add Question
          </button>
        </div>

        {/* Question Table */}
        <div className="bg-gray-800 mt-8 p-6 rounded-2xl shadow-xl border border-gray-700">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="pb-3">Question</th>
                <th className="pb-3">Correct Answer</th>
                <th className="pb-3">Test</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-300">
              {questions.map((q) => (
                <tr
                  key={q.id}
                  className="border-b border-gray-700 hover:bg-gray-750 transition"
                >
                  <td className="py-3">{q.question}</td>
                  <td>{q.correct}</td>
                  <td>{q.test}</td>

                  <td>
                    <div className="flex items-center justify-end gap-4">
                      {/* EDIT */}
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
                        <Pencil size={18} className="text-blue-400" />
                      </button>

                      {/* DELETE */}
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-red-600 transition">
                        <Trash2 size={18} className="text-red-300" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
