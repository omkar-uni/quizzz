import { useNavigate, useLocation } from "react-router-dom";
import {
  BarChart3,
  Layers,
  ListChecks,
  Users,
  FileCheck,
  LogOut,
} from "lucide-react";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    {
      icon: <BarChart3 size={20} />,
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    { icon: <Layers size={20} />, label: "Manage Tests", path: "/admin/tests" },
    {
      icon: <ListChecks size={20} />,
      label: "Question Bank",
      path: "/admin/questions",
    },
    { icon: <Users size={20} />, label: "Students", path: "/admin/students" },
    { icon: <FileCheck size={20} />, label: "Results", path: "/admin/results" },
  ];

  return (
    <aside className="w-64 bg-gray-800 p-6 border-r border-gray-700 flex flex-col">
      <h1 className="text-2xl font-bold mb-8 text-center">Admin Panel</h1>

      {/* MENU */}
      <nav className="space-y-4">
        {menu.map((item, i) => {
          const active = location.pathname === item.path;

          return (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 p-3 rounded-xl w-full text-left transition ${
                active ? "bg-blue-600 text-white" : "hover:bg-gray-700"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="mt-auto pt-6">
        <button
          onClick={() => {
            localStorage.removeItem("admin-auth");
            navigate("/admin");
          }}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 p-3 rounded-xl"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}
