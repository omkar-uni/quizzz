import { useParams, useNavigate } from "react-router-dom";
import Certificate from "../components/Certificate";

export default function ResultPage() {
  const { testId } = useParams();
  const navigate = useNavigate();

  const data = JSON.parse(sessionStorage.getItem("result-data"));

  if (!data) {
    return (
      <div className="text-center text-white mt-20">
        No result found!
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 px-4 py-2 rounded-lg"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto text-center space-y-6 text-white">
      <Certificate score={data.score} total={data.total} />

      <button
        onClick={() => navigate(`/review/${testId}`)}
        className="w-full p-3 bg-green-600 rounded-xl"
      >
        Review Test
      </button>

      <button
        onClick={() => navigate("/leaderboard")}
        className="w-full p-3 bg-yellow-600 rounded-xl"
      >
        Leaderboard
      </button>

      <button
        onClick={() => navigate("/")}
        className="w-full p-3 bg-blue-600 rounded-xl"
      >
        Retry
      </button>
    </div>
  );
}
