import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StudentInfoForm() {
  const { testId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [roll, setRoll] = useState("");

  const [popup, setPopup] = useState(false); // popup toggle

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopup(true); // Show popup
  };

  const handleStartTest = () => {
    // Save student data before starting test
    const studentData = { name, grade, roll, testId };
    sessionStorage.setItem("student-info", JSON.stringify(studentData));

    // Start the test immediately
    navigate(`/quiz/${testId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#111627] relative">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          bg-white/10 backdrop-blur-lg p-10 rounded-3xl 
          max-w-md w-full text-white space-y-6 shadow-2xl
        "
      >
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center">Student Details</h1>

        <p className="text-center text-white/60 text-sm -mt-4">
          Starting Test:{" "}
          <span className="text-cyan-300 font-semibold">{testId}</span>
        </p>

        {/* Name */}
        <div>
          <label className="text-sm text-white/70">Full Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="
              w-full mt-1 px-4 py-3 rounded-xl bg-white/20
              border border-white/20 placeholder-white/60
              focus:outline-none focus:ring-2 focus:ring-cyan-400
            "
          />
        </div>

        {/* Grade */}
        <div>
          <label className="text-sm text-white/70">Class / Grade</label>
          <input
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            placeholder="Enter your class or grade"
            className="
              w-full mt-1 px-4 py-3 rounded-xl bg-white/20
              border border-white/20 placeholder-white/60
              focus:outline-none focus:ring-2 focus:ring-cyan-400
            "
          />
        </div>

        {/* Roll */}
        <div>
          <label className="text-sm text-white/70">Roll No (Optional)</label>
          <input
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            placeholder="Enter roll number"
            className="
              w-full mt-1 px-4 py-3 rounded-xl bg-white/20
              border border-white/20 placeholder-white/60
              focus:outline-none focus:ring-2 focus:ring-cyan-400
            "
          />
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="
            w-full py-3 rounded-xl bg-gradient-to-r 
            from-green-600 to-green-500
            hover:scale-[1.02] transition-transform shadow-lg
            font-semibold text-white
          "
        >
          Continue →
        </button>

        {/* Back */}
        <p
          className="text-center mt-2 text-white/60 text-sm cursor-pointer hover:text-cyan-300"
          onClick={() => navigate("/select-test")}
        >
          ← Back to Tests
        </p>
      </motion.form>

      {/* ================= POPUP ================= */}
      {popup && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="
              bg-white/10 backdrop-blur-xl border border-white/10
              p-8 rounded-2xl shadow-xl w-[90%] max-w-sm text-white
              text-center space-y-6
            "
          >
            <h2 className="text-2xl font-bold">Are you ready?</h2>
            <p className="text-white/70">
              Your test{" "}
              <span className="text-cyan-300 font-semibold">{testId}</span> will
              begin.
            </p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setPopup(false)}
                className="
                  flex-1 py-2 rounded-lg bg-white/20 hover:bg-white/30 
                  transition font-medium
                "
              >
                No, Cancel
              </button>

              <button
                onClick={handleStartTest}
                className="
                  flex-1 py-2 rounded-lg bg-green-600 hover:bg-green-700 
                  transition font-medium
                "
              >
                Yes, Start →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
