function FinishedScreen({ points, totalPpoints, dispatch }) {
  const percentage = (points / totalPpoints) * 100;

  return (
    <>
      <p className="result">
        you have scored <strong>{points}</strong> out of {totalPpoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
