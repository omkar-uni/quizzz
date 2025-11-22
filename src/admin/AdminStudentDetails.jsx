import { useParams, useNavigate } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import { ArrowLeft, FileCheck, Eye } from "lucide-react";

export default function AdminStudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // TEMP STATIC — Replace with backend later
  const student = {
    id,
    name: "Rohan Patil",
    grade: "7th",
    attempts: [
      {
        id: 101,
        test: "Maths Basics",
        score: "8/10",
        time: "42s",
        date: "12 Feb 2025",
      },
      {
        id: 102,
        test: "English Grammar",
        score: "7/10",
        time: "50s",
        date: "10 Feb 2025",
      },
      {
        id: 103,
        test: "GK Test",
        score: "9/10",
        time: "35s",
        date: "7 Feb 2025",
      },
    ],
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      <AdminSidebar />

      <main className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/admin/students")}
            className="bg-gray-800 p-3 rounded-xl hover:bg-gray-700"
          >
            <ArrowLeft />
          </button>

          <h2 className="text-3xl font-bold">{student.name} — Details</h2>
        </div>

        <p className="text-gray-400 mt-1 text-lg">Grade: {student.grade}</p>

        {/* ATTEMPTS TABLE */}
        <div className="bg-gray-800 mt-8 p-6 rounded-2xl border border-gray-700 shadow-xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileCheck size={24} className="text-blue-400" />
            Test Attempts ({student.attempts.length})
          </h3>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700 text-gray-400">
                <th className="pb-3">Test Name</th>
                <th className="pb-3">Score</th>
                <th className="pb-3">Time</th>
                <th className="pb-3">Date</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-300">
              {student.attempts.map((a, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-700 hover:bg-gray-750 transition"
                >
                  <td className="py-3">{a.test}</td>
                  <td>{a.score}</td>
                  <td>{a.time}</td>
                  <td>{a.date}</td>

                  {/* VIEW REVIEW BUTTON (ALIGNED PROPERLY) */}
                  <td className="py-3">
                    <div className="flex justify-end">
                      <button
                        onClick={() => navigate(`/admin/review/${a.id}`)}
                        className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition flex items-center gap-2"
                      >
                        <Eye size={18} className="text-blue-400" />
                        <span className="hidden sm:block">Review</span>
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
