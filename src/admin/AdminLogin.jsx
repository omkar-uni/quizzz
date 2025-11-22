import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // STATIC LOGIN DETAILS (Change later)
  const ADMIN_EMAIL = "admin@example.com";
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = () => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("admin-auth", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl p-8 rounded-3xl w-full max-w-sm space-y-6">
        {/* Logo + Title */}
        <div className="text-center space-y-2">
          <div className="mx-auto bg-blue-600 p-4 rounded-full w-fit shadow-lg">
            <Lock size={28} />
          </div>
          <h1 className="text-2xl font-bold tracking-wide">Admin Login</h1>
          <p className="text-gray-300 text-sm">Secure access panel</p>
        </div>

        {/* Email input */}
        <div>
          <label className="text-sm text-gray-200">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-3 rounded-xl bg-gray-800/70 border border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password input */}
        <div>
          <label className="text-sm text-gray-200">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-3 rounded-xl bg-gray-800/70 border border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Error message */}
        {error && <p className="text-red-400 text-center text-sm">{error}</p>}

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-xl font-semibold shadow-md"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Admin Panel
        </p>
      </div>
    </div>
  );
}
