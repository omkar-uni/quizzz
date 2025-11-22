// src/App.jsx
import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestSelectionPage from "./components/TestSelectionPage";
import Leaderboard from "./components/Leaderboard";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import StudentInfoForm from "./components/StudentInfoForm";
import QuizPage from "./pages/QuizPage";
import ReviewPage from "./pages/ReviewPage";
import ResultPage from "./pages/ResultPage";
import StudentDashboard from "./pages/StudentDashboard";
import AdminLogin from "./admin/AdminLogin";
import AdminRoute from "./admin/AdminRoute";
import AdminDashboard from "./admin/AdminDashboard";
import AdminManageTests from "./admin/AdminManageTests";
import AdminQuestionBank from "./admin/AdminQuestionBank";
import AdminStudents from "./admin/AdminStudents";
import AdminResults from "./admin/AdminResults";
import AdminManageQuestions from "./admin/AdminManageQuestions";
import AdminStudentDetails from "./admin/AdminStudentDetails";
import AdminReviewAttempt from "./admin/AdminReviewAttempt";

export default function App() {
  const location = useLocation();

  // Hide Header + Footer on quiz route
  const hideLayout =
    location.pathname.startsWith("/quiz") ||
    location.pathname.startsWith("/student-form") ||
    location.pathname.startsWith("/ready");

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

       

        {/* Test Select */}
        <Route path="/select-test" element={<TestSelectionPage />} />

        {/* Leaderboard */}
        <Route path="/leaderboard" element={<Leaderboard />} />

        {/* Correct route */}
        <Route path="/student-form/:testId" element={<StudentInfoForm />} />

        {/* QUIZ PAGE (no Header/Footer) */}
        <Route path="/quiz/:testId" element={<QuizPage />} />
        <Route path="/review/:testId" element={<ReviewPage />} />
        <Route path="/result/:testId" element={<ResultPage />} />

        {/* admin routes  */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            // <AdminRoute>
            <AdminDashboard />
            // </AdminRoute>
          }
        />
        <Route
          path="/admin/tests"
          element={
            // <AdminRoute>
            <AdminManageTests />
            // </AdminRoute>
          }
        />
        <Route
          path="/admin/questions"
          element={
            // <AdminRoute>
            <AdminQuestionBank />
            // </AdminRoute>
          }
        />
        <Route
          path="/admin/students"
          element={
            // <AdminRoute>
            <AdminStudents />
            // </AdminRoute>
          }
        />
        <Route
          path="/admin/results"
          element={
            // <AdminRoute>
            <AdminResults />
            // </AdminRoute>
          }
        />
        <Route
          path="/admin/tests/:testId/questions"
          element={
            // <AdminRoute>
            <AdminManageQuestions />
            //</AdminRoute>
          }
        />

        <Route
          path="/admin/students/:id"
          element={
            // <AdminRoute>
            <AdminStudentDetails />
            // </AdminRoute>
          }
        />
        <Route
          path="/admin/review/:attemptId"
          element={
            // <AdminRoute>
            <AdminReviewAttempt />
            // </AdminRoute>
          }
        />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}
