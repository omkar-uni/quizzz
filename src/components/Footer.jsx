import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        w-full mt-20 py-10
        bg-white/10 backdrop-blur-md
        border-t border-white/10
        text-white/80
      "
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ---- About ---- */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-white">SkillTest</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            A modern quiz and assessment platform designed for students to test
            their knowledge, track progress, and compete globally with
            confidence.
          </p>
        </div>

        {/* ---- Quick Links ---- */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-cyan-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/select-test" className="hover:text-cyan-300">
                Tests
              </Link>
            </li>
            <li>
              <Link to="/leaderboard" className="hover:text-cyan-300">
                Leaderboard
              </Link>
            </li>
            <li>
              <Link to="/quiz" className="hover:text-cyan-300">
                Start Quiz
              </Link>
            </li>
          </ul>
        </div>

        {/* ---- Support ---- */}
        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faq" className="hover:text-cyan-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-cyan-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-cyan-300">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-cyan-300">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* ---- Contact ---- */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <span className="text-white/90">support@skilltest.com</span>
            </li>
            <li>
              Phone: <span className="text-white/90">+91 98765 43210</span>
            </li>
            <li>
              Location: <span className="text-white/90">India</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-white/70">
            <a href="#" className="hover:text-cyan-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-cyan-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-cyan-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* ----- Bottom Bar ----- */}
      <div className="mt-10 text-center text-xs text-white/50 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} SkillTest — All Rights Reserved.
      </div>
    </motion.footer>
  );
}
