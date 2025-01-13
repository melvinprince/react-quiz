import { useQuizData } from "../context/QuizProvider";

function Progress({ numQuestions, totalPoints }) {
  const { index, points, answer } = useQuizData();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
