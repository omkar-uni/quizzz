import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  ListChecks,
  Users,
  LogOut,
  FileCheck,
  Layers,
} from "lucide-react";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* ------------------ SIDEBAR ------------------ */}
      <AdminSidebar />
      {/* ------------------ MAIN DASHBOARD ------------------ */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold">Dashboard Overview</h2>
          <p className="text-gray-400 mt-1">Welcome back, Admin 👋</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:bg-gray-750 transition">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Total Tests</h3>
              <Layers className="text-blue-400" />
            </div>
            <p className="text-3xl font-bold mt-2">12</p>
            <p className="text-gray-400 text-sm mt-1">Active exams</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:bg-gray-750 transition">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Total Students</h3>
              <Users className="text-green-400" />
            </div>
            <p className="text-3xl font-bold mt-2">247</p>
            <p className="text-gray-400 text-sm mt-1">Registered users</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:bg-gray-750 transition">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Today's Attempts</h3>
              <FileCheck className="text-yellow-400" />
            </div>
            <p className="text-3xl font-bold mt-2">34</p>
            <p className="text-gray-400 text-sm mt-1">Completed tests</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Recent Activity</h3>
          <div className="bg-gray-800 mt-4 p-6 rounded-2xl shadow-xl border border-gray-700">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="pb-2">Student</th>
                  <th className="pb-2">Test</th>
                  <th className="pb-2">Score</th>
                  <th className="pb-2">Time</th>
                </tr>
              </thead>

              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="py-3">Rohan Patil</td>
                  <td>Maths Basics</td>
                  <td>8 / 10</td>
                  <td>42s</td>
                </tr>

                <tr className="border-b border-gray-700">
                  <td className="py-3">Aisha Khan</td>
                  <td>GK Practice</td>
                  <td>9 / 10</td>
                  <td>37s</td>
                </tr>

                <tr className="">
                  <td className="py-3">Arjun Sharma</td>
                  <td>English Test</td>
                  <td>7 / 10</td>
                  <td>58s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
