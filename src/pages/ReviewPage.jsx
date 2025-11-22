// src/pages/ReviewPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostTestReview from "../components/PostTestReview";

export default function ReviewPage() {
  const navigate = useNavigate();
  const { testId } = useParams();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("review-data"));
    if (!data) {
      navigate("/");
      return;
    }

    setQuestions(data.questions);
    setAnswers(data.answers);
  }, []);

  return (
    <PostTestReview
      questions={questions}
      answers={answers}
      onBack={() => navigate(`/result/${testId}`)}
      onRestart={() => navigate(`/select-test`)}
    />
  );
}
