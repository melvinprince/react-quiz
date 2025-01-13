import { useQuizData } from "../context/QuizProvider";

function StartScreen() {
  const { length, dispatch } = useQuizData();
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{length} questions to test your React Knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;
