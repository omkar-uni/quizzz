import { useParams } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import { Plus, Pencil, Trash2, ListChecks } from "lucide-react";
import { useState } from "react";

export default function AdminManageQuestions() {
  const { testId } = useParams();

  // TEMP STATIC TEST DATA (replace with backend later)
  const [questions, setQuestions] = useState([
    {
      id: 1,
      q: "What is 2 + 2?",
      options: ["2", "3", "4", "5"],
      answer: "4",
    },
    {
      id: 2,
      q: "Capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      answer: "Delhi",
    },
  ]);

  const [editing, setEditing] = useState(null);

  const addOrUpdateQuestion = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const data = {
      id: editing?.id || Date.now(),
      q: form.get("q"),
      options: [
        form.get("opt1"),
        form.get("opt2"),
        form.get("opt3"),
        form.get("opt4"),
      ],
      answer: form.get("answer"),
    };

    if (editing) {
      setQuestions(questions.map((q) => (q.id === editing.id ? data : q)));
    } else {
      setQuestions([...questions, data]);
    }

    setEditing(null);
    e.target.reset();
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <ListChecks size={30} className="text-blue-400" />
            Manage Questions (Test ID: {testId})
          </h2>

          <button
            onClick={() => setEditing({})}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
          >
            <Plus size={20} /> Add Question
          </button>
        </div>

        {/* Questions List */}
        <div className="bg-gray-800 mt-8 p-6 rounded-2xl shadow-xl border border-gray-700 space-y-4">
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-gray-700 p-4 rounded-xl flex justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg">{q.q}</h3>
                <p className="text-sm text-gray-300">Answer: {q.answer}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setEditing(q)}
                  className="p-2 bg-gray-600 rounded-lg hover:bg-gray-500"
                >
                  <Pencil size={18} className="text-blue-300" />
                </button>

                <button
                  onClick={() => deleteQuestion(q.id)}
                  className="p-2 bg-gray-600 rounded-lg hover:bg-red-600"
                >
                  <Trash2 size={18} className="text-red-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit Form */}
        {editing && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">
                {editing.id ? "Edit Question" : "Add Question"}
              </h3>

              <form onSubmit={addOrUpdateQuestion} className="space-y-4">
                <input
                  name="q"
                  defaultValue={editing.q || ""}
                  placeholder="Question"
                  className="w-full p-3 rounded-xl bg-gray-700"
                  required
                />

                {/* OPTIONS */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="opt1"
                    defaultValue={editing.options?.[0] || ""}
                    placeholder="Option 1"
                    className="p-3 rounded-xl bg-gray-700"
                    required
                  />
                  <input
                    name="opt2"
                    defaultValue={editing.options?.[1] || ""}
                    placeholder="Option 2"
                    className="p-3 rounded-xl bg-gray-700"
                    required
                  />
                  <input
                    name="opt3"
                    defaultValue={editing.options?.[2] || ""}
                    placeholder="Option 3"
                    className="p-3 rounded-xl bg-gray-700"
                    required
                  />
                  <input
                    name="opt4"
                    defaultValue={editing.options?.[3] || ""}
                    placeholder="Option 4"
                    className="p-3 rounded-xl bg-gray-700"
                    required
                  />
                </div>

                <input
                  name="answer"
                  defaultValue={editing.answer || ""}
                  placeholder="Correct Answer"
                  className="w-full p-3 rounded-xl bg-gray-700"
                  required
                />

                <div className="flex gap-3 mt-3">
                  <button
                    type="button"
                    onClick={() => setEditing(null)}
                    className="w-1/2 bg-gray-600 p-3 rounded-xl"
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
