import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please fill all fields");
      return;
    }

    const user = { name, email };
    localStorage.setItem("skillUser", JSON.stringify(user));

    navigate("/"); // redirect to home
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#111627]">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          bg-white/10 backdrop-blur-lg border border-white/10
          p-8 rounded-3xl shadow-2xl w-full max-w-md text-white
        "
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-white/60 mb-8 text-sm">
          Login to continue your tests & track progress
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-sm text-white/70">Full Name</label>
            <input
              type="text"
              className="
                w-full mt-1 px-4 py-2 bg-white/5 border border-white/20
                rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400
                text-sm placeholder-white/50
              "
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-white/70">Email Address</label>
            <input
              type="email"
              className="
                w-full mt-1 px-4 py-2 bg-white/5 border border-white/20
                rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400
                text-sm placeholder-white/50
              "
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            className="
              w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500
              hover:scale-[1.02] transition-transform shadow-lg
              font-semibold text-white text-sm
            "
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center mt-4 text-sm text-white/70">
          Not registered yet?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-cyan-300 hover:underline cursor-pointer"
          >
            Create an account →
          </span>
        </p>

        {/* Back to home */}
        <p
          className="text-center mt-4 text-white/70 text-sm cursor-pointer hover:text-cyan-300"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </p>
      </motion.div>
    </div>
  );
}
