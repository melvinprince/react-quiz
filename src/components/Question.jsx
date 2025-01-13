import { useQuizData } from "./context/QuizProvider";
import Options from "./Options";

function Question() {
  const { questions, dispatch, answer, index } = useQuizData();
  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
