import { useNavigate } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import { FileCheck, Eye, Trash2 } from "lucide-react";

export default function AdminResults() {
  const navigate = useNavigate();

  const attempts = [
    {
      id: 1,
      student: "Rohan Patil",
      grade: "7th",
      test: "Maths Basics",
      score: "8/10",
      time: "42s",
    },
    {
      id: 2,
      student: "Aisha Khan",
      grade: "8th",
      test: "GK Test",
      score: "9/10",
      time: "37s",
    },
    {
      id: 3,
      student: "Arjun Sharma",
      grade: "6th",
      test: "English Grammar",
      score: "7/10",
      time: "58s",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <FileCheck size={30} className="text-blue-400" />
            Test Attempts / Results
          </h2>
        </div>

        {/* ATTEMPTS TABLE */}
        <div className="bg-gray-800 mt-8 p-6 rounded-2xl shadow-xl border border-gray-700">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="pb-3">Student</th>
                <th className="pb-3">Grade</th>
                <th className="pb-3">Test</th>
                <th className="pb-3">Score</th>
                <th className="pb-3">Time</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-300">
              {attempts.map((a) => (
                <tr
                  key={a.id}
                  className="border-b border-gray-700 hover:bg-gray-750 transition"
                >
                  <td className="py-3">{a.student}</td>
                  <td>{a.grade}</td>
                  <td>{a.test}</td>
                  <td>{a.score}</td>
                  <td>{a.time}</td>

                  {/* ACTIONS */}
                  <td className="py-3">
                    <div className="flex justify-end gap-4">
                      {/* VIEW ATTEMPT */}
                      <button
                        onClick={() => navigate(`/admin/review/${a.id}`)}
                        className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                      >
                        <Eye size={18} className="text-green-400" />
                      </button>

                      {/* DELETE ATTEMPT */}
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
