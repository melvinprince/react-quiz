import { useQuizData } from "../context/QuizProvider";

function NextButton({ numQuestions }) {
  const { dispatch, answer, index } = useQuizData();
  if (answer === null) return null;

  function handleClick() {
    if (index + 1 < numQuestions) {
      dispatch({ type: "nextQuestion" });
    } else {
      dispatch({ type: "finished" });
    }
  }

  return (
    <button className="btn btn-ui" onClick={handleClick}>
      Next
    </button>
  );
}

export default NextButton;
