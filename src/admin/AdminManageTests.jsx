import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import { Plus, Pencil, Trash2, Layers, ListChecks } from "lucide-react";

export default function AdminManageTests() {
  const navigate = useNavigate();

  const [tests, setTests] = useState([
    {
      id: 1,
      name: "Maths Basics",
      status: "Active",
      questions: [
        { id: 1, q: "2 + 2 = ?", options: ["2", "3", "4", "5"], answer: "4" },
        {
          id: 2,
          q: "5 * 2 = ?",
          options: ["7", "10", "12", "15"],
          answer: "10",
        },
      ],
    },
    {
      id: 2,
      name: "English Grammar",
      status: "Inactive",
      questions: [
        {
          id: 1,
          q: "Which is a verb?",
          options: ["Run", "Tall", "Blue", "Chair"],
          answer: "Run",
        },
      ],
    },
  ]);

  const [editingTest, setEditingTest] = useState(null);

  // ---------------------- ADD / UPDATE TEST ----------------------
  const handleTestSave = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const updatedTest = {
      id: editingTest?.id || Date.now(),
      name: form.get("name"),
      status: form.get("status"),
      questions: editingTest?.questions || [],
    };

    if (editingTest) {
      setTests(tests.map((t) => (t.id === editingTest.id ? updatedTest : t)));
    } else {
      setTests([...tests, updatedTest]);
    }

    setEditingTest(null);
  };

  // ---------------------- DELETE TEST ----------------------
  const deleteTest = (id) => {
    setTests(tests.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-8">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Layers size={30} className="text-blue-400" />
            Manage Tests
          </h2>

          <button
            onClick={() => setEditingTest({})}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
          >
            <Plus size={20} /> Add New Test
          </button>
        </div>

        {/* CLEAN TEST LIST */}
        {tests.map((test) => (
          <div
            key={test.id}
            className="bg-gray-800 border border-gray-700 p-5 rounded-2xl shadow-lg"
          >
            {/* TEST HEADER */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{test.name}</h3>
                <p className="text-sm text-gray-400">{test.status}</p>
                <p className="text-sm text-gray-400">
                  {test.questions.length} Questions
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* MANAGE QUESTIONS BUTTON */}
                <button
                  onClick={() => navigate(`/admin/tests/${test.id}/questions`)}
                  className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center gap-2"
                >
                  <ListChecks size={18} />
                </button>

                {/* EDIT TEST */}
                <button
                  onClick={() => setEditingTest(test)}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
                >
                  <Pencil size={18} className="text-blue-400" />
                </button>

                {/* DELETE TEST */}
                <button
                  onClick={() => deleteTest(test.id)}
                  className="p-2 bg-gray-700 hover:bg-red-600 rounded-lg"
                >
                  <Trash2 size={18} className="text-red-300" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* ---------------------- ADD / EDIT TEST FORM ---------------------- */}
        {editingTest && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">
                {editingTest.id ? "Edit Test" : "Add Test"}
              </h3>

              <form onSubmit={handleTestSave} className="space-y-4">
                <input
                  name="name"
                  defaultValue={editingTest.name || ""}
                  placeholder="Test Name"
                  className="w-full p-3 rounded-xl bg-gray-700 outline-none"
                  required
                />

                <select
                  name="status"
                  defaultValue={editingTest.status || "Active"}
                  className="w-full p-3 rounded-xl bg-gray-700"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>

                <div className="flex gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => setEditingTest(null)}
                    className="w-1/2 bg-gray-700 p-3 rounded-xl"
                  >
                    Cancel
                  </button>

                  <button className="w-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-xl">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
