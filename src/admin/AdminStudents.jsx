import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import { Users, Pencil, Trash2, X, Eye } from "lucide-react";

export default function AdminStudents() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([
    { id: 1, name: "Rohan Patil", grade: "7th", attempts: 5, bestScore: 9 },
    { id: 2, name: "Aisha Khan", grade: "8th", attempts: 3, bestScore: 10 },
    { id: 3, name: "Arjun Sharma", grade: "6th", attempts: 4, bestScore: 8 },
  ]);

  const [editing, setEditing] = useState(null);

  // ---------------- UPDATE STUDENT ----------------
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const updated = {
      id: editing.id,
      name: form.get("name"),
      grade: form.get("grade"),
      attempts: Number(form.get("attempts")),
      bestScore: Number(form.get("bestScore")),
    };

    setStudents(students.map((s) => (s.id === editing.id ? updated : s)));
    setEditing(null);
  };

  // ---------------- DELETE STUDENT ----------------
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      <AdminSidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Users size={30} className="text-blue-400" />
            Students
          </h2>
        </div>

        {/* Students Table */}
        <div className="bg-gray-800 mt-8 p-6 rounded-2xl shadow-xl border border-gray-700">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="pb-3">Name</th>
                <th className="pb-3">Grade</th>
                <th className="pb-3">Attempts</th>
                <th className="pb-3">Best Score</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-300">
              {students.map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-gray-700 hover:bg-gray-750 transition"
                >
                  <td className="py-3">{s.name}</td>
                  <td>{s.grade}</td>
                  <td>{s.attempts}</td>
                  <td>{s.bestScore}</td>

                  <td>
                    <div className="flex items-center justify-end gap-4">
                      {/* VIEW DETAILS */}
                      <button
                        onClick={() => navigate(`/admin/students/${s.id}`)}
                        className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                      >
                        <Eye size={18} className="text-green-400" />
                      </button>

                      {/* EDIT */}
                      <button
                        onClick={() => setEditing(s)}
                        className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                      >
                        <Pencil size={18} className="text-blue-400" />
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => deleteStudent(s.id)}
                        className="p-2 bg-gray-700 rounded-lg hover:bg-red-600 transition"
                      >
                        <Trash2 size={18} className="text-red-300" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EDIT MODAL */}
        {editing && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Edit Student</h3>
                <button onClick={() => setEditing(null)}>
                  <X size={22} className="text-gray-400 hover:text-white" />
                </button>
              </div>

              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="text-sm">Name</label>
                  <input
                    name="name"
                    defaultValue={editing.name}
                    className="w-full p-3 rounded-xl bg-gray-700 mt-1 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm">Grade</label>
                  <input
                    name="grade"
                    defaultValue={editing.grade}
                    className="w-full p-3 rounded-xl bg-gray-700 mt-1 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm">Attempts</label>
                  <input
                    name="attempts"
                    type="number"
                    defaultValue={editing.attempts}
                    className="w-full p-3 rounded-xl bg-gray-700 mt-1 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm">Best Score</label>
                  <input
                    name="bestScore"
                    type="number"
                    defaultValue={editing.bestScore}
                    className="w-full p-3 rounded-xl bg-gray-700 mt-1 outline-none"
                    required
                  />
                </div>

                <button className="w-full p-3 bg-blue-600 rounded-xl hover:bg-blue-700 mt-4">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
