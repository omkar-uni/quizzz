import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiUser, FiLogOut } from "react-icons/fi";

export default function Header() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Simulating login check -> Replace with Firebase/Auth later
  useEffect(() => {
    const savedUser = localStorage.getItem("skillUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("skillUser");
    setUser(null);
    setDropdownOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        w-full flex items-center justify-between
        px-6 py-4 mb-6
        bg-white/10 backdrop-blur-md
        border-b border-white/10
        shadow-md
        sticky top-0 z-50
      "
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center text-xl shadow-lg">
          ⚡
        </div>
        <h1 className="text-xl font-bold tracking-wide">SkillTest</h1>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-cyan-300 transition">
          Home
        </Link>

        <Link to="/select-test" className="hover:text-cyan-300 transition">
          Tests
        </Link>

        <Link to="/leaderboard" className="hover:text-cyan-300 transition">
          Leaderboard
        </Link>
      </nav>

      {/* Right Side: Login or Profile */}
      <div className="flex items-center gap-4 relative">
        {/* Login Button (when NOT logged in) */}
        {!user && (
          <Link
            to="/login"
            className="
              px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700
              text-sm font-semibold shadow-md transition
            "
          >
            Login
          </Link>
        )}

        {/* Profile Icon (when logged in) */}
        {user && (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((p) => !p)}
              className="
                w-10 h-10 rounded-full bg-white/10 border border-white/20
                flex items-center justify-center text-xl hover:bg-white/20 transition
              "
            >
              <FiUser />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="
                  absolute right-0 mt-2 w-40
                  bg-white/10 backdrop-blur-md border border-white/20
                  rounded-xl shadow-lg p-2
                  text-sm
                "
              >
                <p className="px-3 py-2 text-white/80 border-b border-white/10">
                  {user.name}
                </p>

                <button
                  onClick={handleLogout}
                  className="
                    w-full px-3 py-2 flex items-center gap-2
                    text-left text-red-300 hover:bg-white/10 rounded-lg
                  "
                >
                  <FiLogOut /> Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer">☰</div>
      </div>
    </motion.header>
  );
}
