import { useEffect, useReducer } from "react";
import Header from "./Header.jsx";
import MainComp from "./MainComp.jsx";
import Loader from "./Loader.jsx";
import ErrorComp from "./ErrorComp.jsx";
import StartScreen from "./StartScreen.jsx";
import Question from "./Question.jsx";
import NextButton from "./NextButton.jsx";
import Progress from "./Progress.jsx";
import FinishedScreen from "./FinishedScreen.jsx";
import Footer from "./Footer.jsx";
import Timer from "./Timer.jsx";
import { useQuizData } from "../context/QuizProvider.jsx";

export default function App() {
  const { questions, dispatch, status } = useQuizData();
  const numQuestions = questions.length;
  const totalPoints = questions.reduce((a, b) => a + b.points, 0);

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch(`http://localhost:8000/questions`);
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        console.log(err);
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, []);
  return (
    <div className="app">
      <Header />
      <MainComp>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorComp />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress numQuestions={numQuestions} totalPoints={totalPoints} />
            <Question />
            <Footer>
              <Timer />
              <NextButton numQuestions={numQuestions} />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishedScreen totalPpoints={totalPoints} />}
      </MainComp>
    </div>
  );
}
