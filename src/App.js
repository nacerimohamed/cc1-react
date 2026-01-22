import { useState } from "react";
import questions from "./data";
import Header from "./Header";
import Question from "./Question";
import ScoreCard from "./ScoreCard";
import "./App.css";

function App() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionClick = (questionId, selectedOption) => {
    setAnswers({
      ...answers,
      [questionId]: selectedOption
    });
  };

  const calculateScore = () => {
    let s = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        s++;
      }
    });
    setScore(s);
    setIsSubmitted(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setScore(0);
    setIsSubmitted(false);
  };

  return (
    <div className="app">

      <Header title="Quiz de Culture Générale" score={isSubmitted ? score : null} />

      {questions.map((q) => (
        <Question
          key={q.id}
          question={q}
          onOptionSelect={handleOptionClick}
          answers={answers}
          isSubmitted={isSubmitted}
        />
      ))}

       <div className="actions">
  <button className="btn-valider" onClick={calculateScore}>
    Valider
  </button>

  <button className="btn-reset" onClick={resetQuiz}>
    Recommencer
  </button>
</div>

      <ScoreCard
        score={score}
        totalQuestions={questions.length}
        isSubmitted={isSubmitted}
      />
    </div>
  );
}

export default App;
