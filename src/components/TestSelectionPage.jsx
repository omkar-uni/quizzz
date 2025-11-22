import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiBookOpen, FiCpu } from "react-icons/fi";

export default function TestSelectionPage() {
  const navigate = useNavigate();

  const startForm = (testId) => {
    navigate(`/student-form/${testId}`);
  };

  return (
    <div
      className="
        min-h-screen w-full
        flex flex-col items-center justify-start
        pt-20 pb-16 px-6
        bg-[#111627]
      "
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300">
          Select Your Test
        </h1>
        <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto mt-3">
          Choose from our curated assessments and start your learning journey!
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Test 1 */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          onClick={() => startForm("test1")}
          className="
            p-8 rounded-3xl cursor-pointer
            bg-white/10 backdrop-blur-md border border-white/10
            hover:bg-white/20 transition
            shadow-xl hover:shadow-2xl
            flex flex-col gap-4 text-white
          "
        >
          <div className="text-5xl text-cyan-300">
            <FiBookOpen />
          </div>
          <h2 className="text-2xl font-bold">General Quiz</h2>
          <p className="text-white/60 text-sm">
            A balanced mix of general knowledge questions to test your basics.
          </p>
        </motion.div>

        {/* Test 2 */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          onClick={() => startForm("test2")}
          className="
            p-8 rounded-3xl cursor-pointer
            bg-white/10 backdrop-blur-md border border-white/10
            hover:bg-white/20 transition
            shadow-xl hover:shadow-2xl
            flex flex-col gap-4 text-white
          "
        >
          <div className="text-5xl text-purple-300">
            <FiCpu />
          </div>
          <h2 className="text-2xl font-bold">Science Quiz</h2>
          <p className="text-white/60 text-sm">
            Test your conceptual understanding across major science topics.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
