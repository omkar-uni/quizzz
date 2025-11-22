import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill all fields");
      return;
    }

    // Save user locally (simulate registration)
    const newUser = { name, email };
    localStorage.setItem("skillUser", JSON.stringify(newUser));

    alert("Registration successful!");
    navigate("/login"); // redirect to Login
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
          Create Account
        </h2>
        <p className="text-center text-white/60 mb-8 text-sm">
          Register to save progress and access all features
        </p>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
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

          {/* Password */}
          <div>
            <label className="text-sm text-white/70">Password</label>
            <input
              type="password"
              className="
                w-full mt-1 px-4 py-2 bg-white/5 border border-white/20
                rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400
                text-sm placeholder-white/50
              "
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <button
            className="
              w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500
              hover:scale-[1.02] transition-transform shadow-lg
              font-semibold text-white text-sm
            "
          >
            Register
          </button>
        </form>

        {/* Already have an account */}
        <p
          className="text-center mt-6 text-white/70 text-sm cursor-pointer hover:text-cyan-300"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login →
        </p>
      </motion.div>
    </div>
  );
}
