import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Timer from "../components/Timer";
import QuizCard from "../components/QuizCard";
import { tests } from "../data/tests";
import { saveResult } from "../utils/leaderboard";

export default function QuizPage() {
  const { testId } = useParams();
  const navigate = useNavigate();

  const student = JSON.parse(sessionStorage.getItem("student-info"));
  const questions = tests[testId]?.questions || [];

  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const [startTime] = useState(Date.now());

  // ---------------------------------------------------------
  // 🚫 HARD DISABLE BACK, REFRESH, EXIT (NO WARNING)
  // ---------------------------------------------------------
  useEffect(() => {
    const blockBack = () => {
      window.history.pushState(null, "", window.location.href);
    };
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", blockBack);

    const blockKeys = (e) => {
      if (
        e.key === "F5" ||
        (e.ctrlKey && e.key === "r") ||
        (e.ctrlKey && e.key === "R") ||
        (e.metaKey && e.key === "r")
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    document.addEventListener("keydown", blockKeys);

    const blockUnload = (e) => {
      e.preventDefault();
      return false;
    };
    window.addEventListener("beforeunload", blockUnload);

    const blockContext = (e) => e.preventDefault();
    document.addEventListener("contextmenu", blockContext);

    const blockInspect = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    document.addEventListener("keydown", blockInspect);

    return () => {
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("keydown", blockInspect);
      document.removeEventListener("contextmenu", blockContext);
      window.removeEventListener("beforeunload", blockUnload);
      window.removeEventListener("popstate", blockBack);
    };
  }, []);

  // ---------------------------------------------------------
  // TIMER
  // ---------------------------------------------------------
  useEffect(() => {
    if (finished) return;
    if (time === 0) nextQuestion();

    const interval = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [time, finished]);

  const onAnswer = (opt) => {
    setAnswers((prev) => [...prev, opt]);
    if (opt === questions[index].answer) setScore((s) => s + 1);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
      setTime(15);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setFinished(true);

    const timeTakenSeconds = Math.round((Date.now() - startTime) / 1000);

    // Save to leaderboard
    saveResult({
      name: student?.name || "Unknown",
      grade: student?.grade || "",
      testName: tests[testId]?.name || "Unknown Test",
      score,
      total: questions.length,
      timeTaken: timeTakenSeconds,
    });

    // Save required data for result page
    sessionStorage.setItem(
      "result-data",
      JSON.stringify({
        score,
        total: questions.length,
        timeTaken: timeTakenSeconds,
      })
    );

    // Save review data
    sessionStorage.setItem(
      "review-data",
      JSON.stringify({ questions, answers })
    );

    // 👉 Redirect to RESULT PAGE (not review)
    navigate(`/result/${testId}`);
  };

  if (!student) {
    return (
      <div className="text-center text-white mt-20 text-xl">
        Invalid session! Please enter student details again.
        <br />
        <button
          onClick={() => navigate(`/student-form/${testId}`)}
          className="mt-4 bg-blue-600 px-4 py-2 rounded-lg"
        >
          Go to Student Form
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white p-4 max-w-xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2>
          Question {index + 1}/{questions.length}
        </h2>
        <Timer time={time} />
      </div>

      <QuizCard q={questions[index]} onAnswer={onAnswer} />
    </div>
  );
}
