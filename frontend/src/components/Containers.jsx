import React, { useState } from "react";
import LearnedWord from "./LearnedWord/LearnedWord";

const Containers = (props) => {
  const { userWords, newLearned } = props;
  const [answerCount, setAnswerCount] = useState(0);

  const handleCorrect = (e) => {
    e.preventDefault();
    setAnswerCount(answerCount + 1);
  };

  const addButton = e => {
    e.preventDefault();
    alert('card added')
  }

  return (
    <div>
      <form onSubmit={handleCorrect}>
        <h2>I got it right {answerCount} times!</h2>

        <button className="button" value={answerCount}>
          Correct
        </button>
      </form>
      <form>
        <button onClick={addButton}>Add</button>
      </form>
    </div>
  );
};
export default Containers;
